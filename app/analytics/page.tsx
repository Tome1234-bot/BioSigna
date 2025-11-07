"use client"

import { useState, useEffect } from "react"
import { ChartCard } from "@/components/chart-card"
import { LineChart } from "@/components/line-chart"
import { AlertCircle, BarChart3, Target } from "lucide-react"
import { formatTime } from "@/lib/health-utils"

export default function Analytics() {
  const [riskScores, setRiskScores] = useState({
    cardiovascular: 25,
    diabetes: 18,
    hypertension: 15,
    obesity: 12,
  })

  const [trendData, setTrendData] = useState([
    { label: "Week 1", value: 28 },
    { label: "Week 2", value: 26 },
    { label: "Week 3", value: 24 },
    { label: "Week 4", value: 22 },
    { label: "Week 5", value: 20 },
    { label: "Week 6", value: 19 },
    { label: "Week 7", value: 18 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrendData((prev) => [
        ...prev.slice(1),
        { label: formatTime(new Date()), value: Math.floor(Math.random() * 20) + 15 },
      ])
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const healthHorizon = [
    { period: "Next 30 Days", probability: 5, description: "Low risk period" },
    { period: "Next 90 Days", probability: 12, description: "Moderate monitoring" },
    { period: "Next 6 Months", probability: 28, description: "Lifestyle intervention recommended" },
  ]

  const patterns = [
    { name: "Irregular Sleep Pattern", severity: "medium", impact: "High" },
    { name: "Elevated Stress Levels", severity: "high", impact: "Critical" },
    { name: "Sedentary Behavior", severity: "medium", impact: "High" },
    { name: "Poor Nutrition Habits", severity: "low", impact: "Medium" },
  ]

  const riskFactors = [
    { factor: "Family History", weight: "Very High", percentage: 85 },
    { factor: "Age Factor", weight: "High", percentage: 72 },
    { factor: "Lifestyle Habits", weight: "High", percentage: 68 },
    { factor: "Current Stress", weight: "Medium", percentage: 55 },
    { factor: "Environmental", weight: "Low", percentage: 35 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Predictive Analytics & Risk Assessment</h1>
        <p className="text-slate-600">AI-powered health predictions and disease risk analysis</p>
      </div>

      {/* Risk Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Object.entries(riskScores).map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-600 uppercase tracking-wide mb-3 font-semibold">
              {key.replace(/([A-Z])/g, " $1").trim()} Risk
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-slate-900">{value}%</p>
                <p className="text-xs text-slate-500 mt-1">
                  {value < 20 ? "Low Risk" : value < 40 ? "Moderate Risk" : "High Risk"}
                </p>
              </div>
              <div className="w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--deep-purple))"
                    strokeWidth="8"
                    strokeDasharray={`${(value / 100) * 283} 283`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Health Horizon and Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartCard title="Risk Trend Over Time" footer="Based on lifestyle and health metrics">
            <LineChart data={trendData} color="hsl(var(--deep-purple))" height={250} />
          </ChartCard>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-deep-purple" />
            Health Horizon Report
          </h3>
          <div className="space-y-4">
            {healthHorizon.map((item, i) => (
              <div key={i} className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm font-medium text-slate-900">{item.period}</p>
                <div className="mt-2 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    style={{ width: `${item.probability}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  {item.probability}% - {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pattern Recognition and Comparative Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Detected Patterns */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-deep-purple" />
            Pattern Recognition Gallery
          </h3>
          <div className="space-y-3">
            {patterns.map((pattern, i) => (
              <div key={i} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{pattern.name}</p>
                    <p className="text-xs text-slate-600 mt-1">Impact: {pattern.impact}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      pattern.severity === "high"
                        ? "bg-red-100 text-red-700"
                        : pattern.severity === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {pattern.severity === "high" ? "High" : pattern.severity === "medium" ? "Medium" : "Low"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Factor Breakdown */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-deep-purple" />
            Risk Factor Breakdown
          </h3>
          <div className="space-y-4">
            {riskFactors.map((factor, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{factor.factor}</p>
                    <p className="text-xs text-slate-500">{factor.weight}</p>
                  </div>
                  <p className="text-sm font-bold text-slate-900">{factor.percentage}%</p>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    style={{ width: `${factor.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4">Comparative Analysis: Your Health vs. Population Average</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { metric: "Heart Health", yourScore: 78, avgScore: 72 },
            { metric: "Fitness Level", yourScore: 68, avgScore: 65 },
            { metric: "Mental Wellness", yourScore: 75, avgScore: 70 },
            { metric: "Overall Health", yourScore: 74, avgScore: 71 },
          ].map((comp, i) => (
            <div key={i} className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900 mb-4">{comp.metric}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Your Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: `${comp.yourScore}%` }} />
                    </div>
                    <p className="text-xs font-bold text-slate-900">{comp.yourScore}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Population Avg</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400" style={{ width: `${comp.avgScore}%` }} />
                    </div>
                    <p className="text-xs font-bold text-slate-600">{comp.avgScore}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
