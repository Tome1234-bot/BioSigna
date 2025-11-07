"use client"

import { Heart, TrendingUp, BookOpen, Activity } from "lucide-react"

export default function Medical() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-crimson-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Medical Condition Intelligence</h1>
        <p className="text-slate-600">Disease management and clinical guidance</p>
      </div>

      {/* Disease Registry */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Disease Registry Dashboard</h2>
        <div className="space-y-4">
          {[
            { condition: "Hypertension", status: "Managed", severity: "Moderate", notes: "12 years" },
            { condition: "Type 2 Diabetes", status: "Controlled", severity: "Moderate", notes: "5 years" },
            { condition: "Hyperlipidemia", status: "Managed", severity: "Mild", notes: "3 years" },
          ].map((condition, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-slate-900">{condition.condition}</p>
                  <p className="text-sm text-slate-600">Diagnosed: {condition.notes}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    condition.severity === "Mild"
                      ? "bg-green-100 text-green-800"
                      : condition.severity === "Moderate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {condition.severity}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">Status: {condition.status}</p>
              <button className="text-medical-crimson font-semibold text-sm hover:underline">
                View Condition Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Monitoring Modules */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Condition-Specific Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Hypertension Module", "Diabetes Module", "Heart Health Module"].map((module, i) => (
            <button key={i} className="bg-medical-crimson text-white rounded-lg p-6 hover:shadow-lg transition">
              <Heart className="w-8 h-8 mb-3" />
              <p className="font-semibold">{module}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Treatment and Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Treatment Protocol Manager */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-medical-crimson" />
            Treatment Protocol Manager
          </h3>
          <div className="space-y-3">
            {[
              { treatment: "Medication Regimen", status: "On Track", progress: 92 },
              { treatment: "Lifestyle Changes", status: "In Progress", progress: 68 },
              { treatment: "Physical Therapy", status: "On Track", progress: 85 },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-slate-900 text-sm">{item.treatment}</p>
                  <span className="text-xs font-medium text-medical-crimson">{item.status}</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-medical-crimson" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Library */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-medical-crimson" />
            Condition Education Library
          </h3>
          <div className="space-y-3">
            {["Understanding Your Blood Pressure", "Diabetes: Types and Management", "Heart Health Essentials"].map(
              (resource, i) => (
                <button
                  key={i}
                  className="w-full text-left p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                >
                  <p className="font-medium text-slate-900 text-sm">{resource}</p>
                  <p className="text-xs text-slate-500 mt-1">20-30 min read</p>
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Analytics and Progression */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-8">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-medical-crimson" />
          Comorbidity Analyzer & Progression Tracker
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { metric: "Condition Progression", trend: "Stable", change: "0%" },
            { metric: "Treatment Effectiveness", trend: "Improving", change: "+8%" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-red-50 rounded-lg">
              <p className="font-medium text-slate-900 text-sm mb-1">{item.metric}</p>
              <p className="text-sm text-medical-crimson font-semibold">{item.trend}</p>
              <p className="text-xs text-slate-600 mt-1">{item.change} from last month</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Guidelines */}
      <div className="bg-gradient-to-br from-red-100 to-crimson-100 rounded-lg p-6 border border-red-300">
        <h3 className="font-semibold text-slate-900 mb-2">Clinical Guideline Repository</h3>
        <p className="text-slate-700 mb-4">
          Evidence-based guidelines for your conditions from leading medical organizations
        </p>
        <button className="bg-medical-crimson text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90">
          View Clinical Guidelines
        </button>
      </div>
    </div>
  )
}
