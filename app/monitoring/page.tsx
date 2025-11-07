"use client"

import { useState, useEffect } from "react"
import { ChartCard } from "@/components/chart-card"
import { LineChart } from "@/components/line-chart"
import { Heart, Brain, Wind, Activity, AlertTriangle, Wifi } from "lucide-react"
import { generateHeartRate, formatTime } from "@/lib/health-utils"

export default function Monitoring() {
  const [heartRate, setHeartRate] = useState(72)
  const [respiratoryRate, setRespiratoryRate] = useState(16)
  const [ecgData, setEcgData] = useState([
    { label: "12 AM", value: 75 },
    { label: "2 AM", value: 68 },
    { label: "4 AM", value: 65 },
    { label: "6 AM", value: 70 },
    { label: "8 AM", value: 78 },
    { label: "10 AM", value: 82 },
    { label: "12 PM", value: 85 },
  ])
  const [alerts, setAlerts] = useState([
    { severity: "warning", message: "Elevated heart rate detected", time: "5 min ago" },
    { severity: "info", message: "Irregular rhythm pattern", time: "12 min ago" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(generateHeartRate())
      setRespiratoryRate(Math.floor(Math.random() * 8) + 14)
      setEcgData((prev) => [
        ...prev.slice(1),
        { label: formatTime(new Date()), value: Math.floor(Math.random() * 30) + 65 },
      ])
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const sensorStatus = [
    { name: "Heart Rate Sensor", status: "connected", battery: 95 },
    { name: "ECG Monitor", status: "connected", battery: 87 },
    { name: "Pulse Oximeter", status: "connected", battery: 78 },
    { name: "Temperature Sensor", status: "connected", battery: 92 },
  ]

  const vitalSigns = [
    { label: "Heart Rate", value: heartRate, unit: "bpm", icon: Heart, color: "bg-vital-red", normal: "60-100" },
    {
      label: "Respiratory Rate",
      value: respiratoryRate,
      unit: "breaths/min",
      icon: Wind,
      color: "bg-teal-green",
      normal: "12-20",
    },
    { label: "Temperature", value: 98.6, unit: "°F", icon: Activity, color: "bg-alert-orange", normal: "98.6" },
    { label: "Blood O2", value: 98, unit: "%", icon: Activity, color: "bg-fresh-green", normal: "95-100" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Real-time Monitoring</h1>
        <p className="text-slate-600">Live cardiovascular and neurological tracking</p>
      </div>

      {/* Live Status Indicator */}
      <div className="mb-8 bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold text-slate-900">Live Monitoring Active</span>
          </div>
          <span className="text-sm text-slate-600">Last synced: 2 seconds ago</span>
        </div>
      </div>

      {/* Vital Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {vitalSigns.map((vital, i) => {
          const Icon = vital.icon
          return (
            <div
              key={i}
              className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-600 mb-1">{vital.label}</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-bold text-slate-900">{vital.value}</p>
                    <p className="text-xs text-slate-500">{vital.unit}</p>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Normal: {vital.normal}</p>
                </div>
                <div className={`p-2 rounded-lg ${vital.color} text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full ${vital.color}`} style={{ width: "75%" }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* ECG and Cardiovascular */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartCard title="Cardiovascular Dashboard - Heart Rate Variability" footer="Real-time ECG monitoring">
            <LineChart data={ecgData} color="hsl(var(--vital-red))" height={250} />
          </ChartCard>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-deep-purple" />
            Neurological Status
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Brain Activity</p>
              <p className="text-xs text-slate-600 mt-1">Normal patterns detected</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Neural Load</p>
              <p className="text-xs text-slate-600 mt-1">Moderate (45/100)</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Cognitive Function</p>
              <p className="text-xs text-slate-600 mt-1">Optimal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-alert-orange" />
            Live Alerts Stream
          </h3>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${
                  alert.severity === "warning" ? "bg-yellow-50 border-yellow-200" : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 ${alert.severity === "warning" ? "bg-yellow-500" : "bg-blue-500"}`}
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${alert.severity === "warning" ? "text-yellow-900" : "text-blue-900"}`}
                    >
                      {alert.message}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensor Status */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Wifi className="w-5 h-5 text-teal-green" />
            Sensor Status Panel
          </h3>
          <div className="space-y-3">
            {sensorStatus.map((sensor, i) => (
              <div key={i} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{sensor.name}</p>
                  <p className="text-xs text-slate-500">Battery: {sensor.battery}%</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-medium text-green-600">Connected</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body Metrics */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-fresh-green" />
          Body Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Body Temperature", value: "98.6°F", status: "Normal" },
            { label: "Skin Conductance", value: "2.4 µS", status: "Normal" },
            { label: "Core Temp", value: "37.0°C", status: "Normal" },
          ].map((metric, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">{metric.label}</p>
              <p className="text-xl font-bold text-slate-900">{metric.value}</p>
              <p className="text-xs text-green-600 mt-2">{metric.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
