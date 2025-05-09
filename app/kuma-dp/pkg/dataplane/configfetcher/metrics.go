package configfetcher

import (
	"github.com/prometheus/client_golang/prometheus"
)

type handlerMetrics struct {
	HandlerTickDuration prometheus.Summary
	HandlerErrorCount   prometheus.Counter
	HandlerTickCount    prometheus.Counter
}

func newHandlerMetrics(path string) *handlerMetrics {
	labels := prometheus.Labels{"path": path}
	handlerTickCount := prometheus.NewCounter(prometheus.CounterOpts{
		Name:        "kuma_dp_envoyconfigfetcher_handler_call_count",
		Help:        "Number of times a handler has been called, unlike kuma_dp_envoyconfigfetcher_handler_call_duration_seconds this is inclusive of not modified cases",
		ConstLabels: labels,
	})
	prometheus.MustRegister(handlerTickCount)
	handlerTickDuration := prometheus.NewSummary(prometheus.SummaryOpts{
		Name:        "kuma_dp_envoyconfigfetcher_handler_call_duration_seconds",
		Help:        "The duration for the envoy configuration to be fetched and processed by the handler. This is not computed when no change happened",
		ConstLabels: labels,
	})
	handlerErrorCount := prometheus.NewCounter(prometheus.CounterOpts{
		Name:        "kuma_dp_envoyconfigfetcher_handler_error_count",
		Help:        "Number of times the handler encountered an error",
		ConstLabels: labels,
	})

	return &handlerMetrics{
		HandlerTickDuration: handlerTickDuration,
		HandlerErrorCount:   handlerErrorCount,
		HandlerTickCount:    handlerTickCount,
	}
}
