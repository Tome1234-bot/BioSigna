"use client"

import { Lock, Eye, Download, Key, Shield, Database, Zap } from "lucide-react"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Data Integration & Privacy Hub</h1>
        <p className="text-slate-600">Control your health data and privacy settings</p>
      </div>

      {/* Privacy Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Shield, label: "Data Protected", value: "100%", color: "bg-security-blue" },
          { icon: Lock, label: "Encrypted", value: "AES-256", color: "bg-security-blue" },
          { icon: Eye, label: "Views This Month", value: "2", color: "bg-security-blue" },
          { icon: Zap, label: "Shares Active", value: "3", color: "bg-security-blue" },
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className={`${item.color} text-white w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-600 mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          )
        })}
      </div>

      {/* Connected Apps */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Connected Apps Manager</h2>
        <div className="space-y-3">
          {[
            { name: "Fitbit Sync", connected: true, permissions: "Steps, Sleep, Heart Rate" },
            { name: "Apple Health", connected: true, permissions: "Workouts, Heart Rate" },
            { name: "Spotify", connected: false, permissions: "Would need: Listening habits" },
          ].map((app, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900">{app.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{app.permissions}</p>
              </div>
              <button
                className={`px-4 py-2 rounded font-semibold text-sm transition ${
                  app.connected
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {app.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Data Export Tools */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-security-blue" />
            Data Export Tools
          </h3>
          <div className="space-y-3">
            {["Full Health Record", "Last 30 Days", "Specific Timeframe"].map((option, i) => (
              <button
                key={i}
                className="w-full p-3 border border-slate-200 rounded-lg text-left hover:bg-slate-50 transition font-medium text-slate-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Permission Controls */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-security-blue" />
            Permission Controls
          </h3>
          <div className="space-y-3">
            {[
              { item: "Allow Family Sharing", enabled: true },
              { item: "Allow Doctor Access", enabled: true },
              { item: "Allow Research Participation", enabled: false },
              { item: "Public Profile", enabled: false },
            ].map((perm, i) => (
              <div key={i} className="flex items-center justify-between">
                <p className="text-slate-900">{perm.item}</p>
                <button
                  className={`relative w-12 h-6 rounded-full transition ${
                    perm.enabled ? "bg-green-500" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                      perm.enabled ? "right-1" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blockchain Verification */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-8">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-security-blue" />
          Blockchain Verification
        </h3>
        <p className="text-slate-600 mb-4">Your health records are verified and immutable on blockchain</p>
        <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm text-slate-600 break-all mb-4">0x2d3e...4f8a</div>
        <button className="w-full bg-security-blue text-white py-2 rounded font-semibold hover:opacity-90">
          View Full Transaction Hash
        </button>
      </div>

      {/* Offline Mode */}
      <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg p-6 border border-blue-300">
        <h3 className="font-semibold text-slate-900 mb-2">Offline Mode Manager</h3>
        <p className="text-slate-700 mb-4">Access your health data even without internet connection</p>
        <button className="bg-security-blue text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90">
          Enable Offline Sync
        </button>
      </div>
    </div>
  )
}
