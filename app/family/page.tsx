"use client"

import { Users, Share2, Heart, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

export default function Family() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Family & Care Network Hub</h1>
        <p className="text-slate-600">Manage health visibility and care coordination</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button className="bg-warm-coral text-white rounded-lg p-6 hover:shadow-lg transition flex items-center gap-4">
          <Users className="w-8 h-8" />
          <div className="text-left">
            <p className="font-bold">Invite Family Member</p>
            <p className="text-sm">Share your health data</p>
          </div>
        </button>
        <button className="bg-warm-coral text-white rounded-lg p-6 hover:shadow-lg transition flex items-center gap-4">
          <Share2 className="w-8 h-8" />
          <div className="text-left">
            <p className="font-bold">Manage Permissions</p>
            <p className="text-sm">Control who sees what</p>
          </div>
        </button>
      </div>

      {/* Family Members */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Family Members</h2>
        <div className="space-y-4">
          {[
            { name: "Sarah Johnson", relation: "Spouse", access: "Full Access", status: "Active" },
            { name: "Emma Johnson", relation: "Daughter", access: "Limited Access", status: "Active" },
            { name: "Robert Johnson", relation: "Son", access: "Emergency Only", status: "Pending" },
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-slate-900">{member.name}</p>
                  <p className="text-sm text-slate-600">{member.relation}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    member.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {member.status}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{member.access}</p>
              <div className="flex gap-2">
                <button className="flex-1 border border-slate-300 rounded py-2 hover:bg-slate-50 font-medium text-slate-900 text-sm">
                  Edit Access
                </button>
                <button className="flex-1 border border-red-300 text-red-700 rounded py-2 hover:bg-red-50 font-medium text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Circle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Shared Milestone Tracker */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-warm-coral" />
            Shared Milestone Tracker
          </h3>
          <div className="space-y-4">
            {["Completed 30-day health challenge", "Weight goal achieved", "Medication adherence 95%"].map(
              (milestone, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-rose-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-sm text-slate-900">{milestone}</p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Emergency Status Board */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-warm-coral" />
            Emergency Status Board
          </h3>
          <div className="space-y-3">
            {[
              { person: "Sarah Johnson", status: "All clear", icon: "✓", color: "green" },
              { person: "Emma Johnson", status: "Needs attention", icon: "!", color: "yellow" },
            ].map((person, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border-2 ${
                  person.color === "green" ? "border-green-300 bg-green-50" : "border-yellow-300 bg-yellow-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-white ${
                      person.color === "green" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {person.icon}
                  </span>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{person.person}</p>
                    <p className="text-xs text-slate-600">{person.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Member Insights */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-8">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-warm-coral" />
          Cross-Member Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Family Health Trends", "Shared Health Goals", "Preventive Care Status"].map((insight, i) => (
            <div key={i} className="p-4 bg-rose-50 rounded-lg">
              <p className="font-medium text-slate-900 text-sm mb-2">{insight}</p>
              <p className="text-xs text-slate-600">View detailed analysis</p>
            </div>
          ))}
        </div>
      </div>

      {/* Caregiver Coordination */}
      <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg p-6 border border-rose-300">
        <h3 className="font-semibold text-slate-900 mb-2">Caregiver Task Coordination</h3>
        <p className="text-slate-700 mb-4">Assign and track health management tasks among family members</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {["Create Task", "View Tasks", "Health Advocacy"].map((action, i) => (
            <button
              key={i}
              className="bg-white hover:shadow-md transition rounded-lg p-3 font-semibold text-slate-900 text-sm"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
