"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, Droplet, AlertCircle, Shield, Activity, Smartphone } from "lucide-react"
import { ChartCard } from "@/components/chart-card"
import { LineChart } from "@/components/line-chart"
import { formatTime } from "@/lib/health-utils"

export default function Interventions() {
  const [stressReduction, setStressReduction] = useState([
    { label: "8 AM", value: 65 },
    { label: "10 AM", value: 58 },
    { label: "12 PM", value: 55 },
    { label: "2 PM", value: 62 },
    { label: "4 PM", value: 50 },
    { label: "6 PM", value: 48 },
    { label: "8 PM", value: 45 },
  ])

  const [emergencies, setEmergencies] = useState([
    {
      id: "1",
      severity: "critical",
      message: "Abnormal heart rate detected",
      time: "2 min ago",
      action: "Call Emergency",
    },
    { id: "2", severity: "warning", message: "High blood pressure alert", time: "15 min ago", action: "Notify Doctor" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStressReduction((prev) => [
        ...prev.slice(1),
        { label: formatTime(new Date()), value: Math.floor(Math.random() * 40) + 40 },
      ])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const programs = [
    {
      id: "1",
      name: "Stress Reduction Program",
      description: "AI-guided relaxation and meditation",
      sessions: 12,
      completed: 8,
      nextSession: "Today 6:00 PM",
    },
    {
      id: "2",
      name: "Hydration Manager",
      description: "Smart water intake tracking",
      sessions: "Daily",
      completed: 6,
      nextSession: "Drink 250ml now",
    },
    {
      id: "3",
      name: "Fall Prevention Program",
      description: "Balance and strength exercises",
      sessions: 3,
      completed: 1,
      nextSession: "Tomorrow 10:00 AM",
    },
    {
      id: "4",
      name: "Medical Optimizer",
      description: "Medication timing and reminders",
      sessions: "Ongoing",
      completed: 94,
      nextSession: "Lisinopril - 7:00 PM",
    },
  ]

  const emergencyProtocols = [
    {
      trigger: "Heart Rate > 120",
      action: "Alert and suggest rest",
      automation: "Enabled",
      lastTriggered: "2 hours ago",
    },
    {
      trigger: "BP > 160/100",
      action: "Notify emergency contacts",
      automation: "Enabled",
      lastTriggered: "5 days ago",
    },
    {
      trigger: "Fall detected",
      action: "Call emergency services",
      automation: "Enabled",
      lastTriggered: "Never",
    },
    {
      trigger: "Low oxygen < 90%",
      action: "Immediate alert",
      automation: "Enabled",
      lastTriggered: "1 week ago",
    },
  ]

  const hydrationLog = [
    { time: "8:00 AM", amount: "250ml", source: "Water" },
    { time: "10:30 AM", amount: "200ml", source: "Coffee" },
    { time: "1:00 PM", amount: "500ml", source: "Water" },
    { time: "3:30 PM", amount: "250ml", source: "Juice" },
    { time: "6:00 PM", amount: "200ml", source: "Water" },
  ]

  const environmentalShielding = [
    { shield: "Air Quality Monitor", status: "Good (AQI: 45)", alert: false },
    { shield: "Allergen Tracker", status: "Moderate (Pollen: High)", alert: true },
    { shield: "Noise Level", status: "Normal (65 dB)", alert: false },
    { shield: "Temperature", status: "Optimal (72°F)", alert: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Intelligent Intervention & Automation</h1>
        <p className="text-slate-600">Proactive health management and emergency response</p>
      </div>

      {/* Emergency Status Banner */}
      {emergencies.length > 0 && (
        <div className="mb-8 bg-red-100 border-l-4 border-red-600 p-4 rounded">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-lg font-semibold text-red-900">Active Alerts</h2>
          </div>
          <div className="space-y-2">
            {emergencies.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between bg-white rounded p-3">
                <div>
                  <p className="font-medium text-slate-900">{alert.message}</p>
                  <p className="text-xs text-slate-600">{alert.time}</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 text-sm">
                  {alert.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Emergency Response System */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Emergency Response System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-red-600 text-white rounded-lg p-6 hover:bg-red-700 transition flex items-center gap-4">
            <AlertTriangle className="w-8 h-8" />
            <div className="text-left">
              <p className="font-bold">Emergency SOS</p>
              <p className="text-sm">Tap to contact emergency services</p>
            </div>
          </button>
          <button className="bg-alert-orange text-white rounded-lg p-6 hover:opacity-90 transition flex items-center gap-4">
            <Smartphone className="w-8 h-8" />
            <div className="text-left">
              <p className="font-bold">Emergency Contacts</p>
              <p className="text-sm">Alert family and doctors</p>
            </div>
          </button>
        </div>
      </div>

      {/* Stress Reduction Coach */}
      <div className="mb-8">
        <ChartCard title="Stress Reduction Coach - Daily Progress" footer="AI-guided stress management">
          <LineChart data={stressReduction} color="hsl(var(--alert-orange))" height={250} />
        </ChartCard>
      </div>

      {/* Intervention Programs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Intervention Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{program.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{program.description}</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-slate-600">Progress</p>
                  {typeof program.sessions === "number" && (
                    <p className="text-sm font-medium text-slate-900">
                      {program.completed} / {program.sessions}
                    </p>
                  )}
                </div>
                {typeof program.sessions === "number" && (
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-alert-orange"
                      style={{ width: `${(program.completed / program.sessions) * 100}%` }}
                    />
                  </div>
                )}
              </div>

              <div className="p-3 bg-orange-50 rounded mb-4">
                <p className="text-xs text-slate-600 mb-1">Next Session</p>
                <p className="text-sm font-medium text-slate-900">{program.nextSession}</p>
              </div>

              <button className="w-full bg-alert-orange text-white py-2 rounded font-semibold hover:opacity-90 text-sm">
                Start Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Protocols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Automated Emergency Protocols */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-alert-orange" />
            Automated Emergency Protocols
          </h3>
          <div className="space-y-3">
            {emergencyProtocols.map((protocol, i) => (
              <div key={i} className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-slate-900 text-sm">{protocol.trigger}</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {protocol.automation}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{protocol.action}</p>
                <p className="text-xs text-slate-500">Last: {protocol.lastTriggered}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration Manager */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-teal-green" />
            Hydration Manager
          </h3>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-900">Daily Hydration Goal</p>
              <p className="text-lg font-bold text-slate-900">1,400 / 2,000 ml</p>
            </div>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-teal-green" style={{ width: "70%" }} />
            </div>
          </div>

          <div className="space-y-2">
            {hydrationLog.map((entry, i) => (
              <div key={i} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{entry.source}</p>
                  <p className="text-xs text-slate-600">{entry.time}</p>
                </div>
                <p className="font-semibold text-teal-green">{entry.amount}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-teal-green text-white py-2 rounded font-semibold hover:opacity-90 text-sm">
            Log Water Intake
          </button>
        </div>
      </div>

      {/* Environmental Shielding */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-8">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-security-blue" />
          Environmental Shielding
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {environmentalShielding.map((item, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg border-2 ${item.alert ? "border-yellow-300 bg-yellow-50" : "border-green-300 bg-green-50"}`}
            >
              <p className="font-medium text-slate-900 text-sm mb-2">{item.shield}</p>
              <p className="text-xs font-semibold text-slate-600">{item.status}</p>
              {item.alert && (
                <div className="mt-2 flex items-center gap-1 text-xs text-yellow-700">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Requires attention</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Medical Resilience Programs */}
      <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-6 border border-orange-300">
        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Medical Resilience Programs
        </h3>
        <p className="text-slate-700 mb-4">
          Comprehensive programs designed to build medical resilience and prevent adverse health events.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Injury Prevention", "Disease Management", "Wellness Coaching"].map((program, i) => (
            <button
              key={i}
              className="bg-white hover:shadow-md transition rounded-lg p-4 text-left font-semibold text-slate-900"
            >
              {program}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
