package listeners_test

import (
	core_xds "github.com/kumahq/kuma/pkg/core/xds"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	util_proto "github.com/kumahq/kuma/pkg/util/proto"
	"github.com/kumahq/kuma/pkg/xds/envoy"
	. "github.com/kumahq/kuma/pkg/xds/envoy/listeners"
	"github.com/kumahq/kuma/pkg/xds/envoy/listeners/v3"
)

var _ = Describe("HttpConnectionManager Configurers", func() {
	type Opt = FilterChainBuilderOpt

	type testCase struct {
		opts         []Opt
		hcmAnnotator v3.HttpConnectionManagerConfigurerAnnotateFunc
		expected     string
	}

	Context("V3", func() {
		DescribeTable("should generate proper Envoy config",
			func(given testCase) {
				opts := append([]Opt{
					HttpConnectionManager("test", false, given.hcmAnnotator),
				}, given.opts...)

				// when
				chain, err := NewFilterChainBuilder(envoy.APIV3, envoy.AnonymousResource).
					Configure(opts...).
					Build()
				// then
				Expect(err).ToNot(HaveOccurred())

				// when
				actual, err := util_proto.ToYAML(chain)
				// then
				Expect(err).ToNot(HaveOccurred())
				// and
				Expect(actual).To(MatchYAML(given.expected))
			},
			Entry("set the server header", testCase{
				opts: []Opt{ServerHeader("test-server")},
				expected: `
          filters:
          - name: envoy.filters.network.http_connection_manager
            typedConfig:
              '@type': type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
              httpFilters:
              - name: envoy.filters.http.router
                typedConfig:
                  '@type': type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
              serverName: test-server
              statPrefix: test`,
			}),

			Entry("set path normalization", testCase{
				opts: []Opt{EnablePathNormalization()},
				expected: `
          filters:
          - name: envoy.filters.network.http_connection_manager
            typedConfig:
              '@type': type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
              httpFilters:
              - name: envoy.filters.http.router
                typedConfig:
                  '@type': type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
              mergeSlashes: true
              normalizePath: true
              pathWithEscapedSlashesAction: UNESCAPE_AND_REDIRECT
              statPrefix: test`,
			}),

			Entry("strip host port", testCase{
				opts: []Opt{StripHostPort()},
				expected: `
          filters:
          - name: envoy.filters.network.http_connection_manager
            typedConfig:
              '@type': type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
              httpFilters:
              - name: envoy.filters.http.router
                typedConfig:
                  '@type': type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
              statPrefix: test
              stripAnyHostPort: true`,
			}),

			Entry("internal address config", testCase{
				hcmAnnotator: func(configurer *v3.HttpConnectionManagerConfigurer) {
					configurer.InternalAddresses = []core_xds.InternalAddress{
						{PrefixLen: 16, AddressPrefix: "10.17.0.0"},
					}
				},
				opts: []Opt{},
				expected: `
          filters:
          - name: envoy.filters.network.http_connection_manager
            typedConfig:
              '@type': type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
              httpFilters:
              - name: envoy.filters.http.router
                typedConfig:
                  '@type': type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
              statPrefix: test
              internalAddressConfig:
                  cidrRanges:
                      - addressPrefix: 10.17.0.0
                        prefixLen: 16`,
			}),
		)
	})
})
