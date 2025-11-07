"use client"

import { User, Bell, Smartphone, Lock, LogOut, HelpCircle } from "lucide-react"

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Settings & Profile Management</h1>
        <p className="text-slate-600">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5" />
          Personal Health Profile
        </h2>
        <div className="space-y-4">
          {[
            { label: "Full Name", value: "John Doe" },
            { label: "Date of Birth", value: "January 15, 1980" },
            { label: "Gender", value: "Male" },
            { label: "Blood Type", value: "O+" },
            { label: "Height", value: "5'10\"" },
            { label: "Weight", value: "180 lbs" },
          ].map((field, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="text-slate-600">{field.label}</span>
              <span className="font-semibold text-slate-900">{field.value}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 bg-neutral-400 text-white py-2 rounded font-semibold hover:opacity-90">
          Edit Profile
        </button>
      </div>

      {/* Device Pairing */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          Device Pairing
        </h2>
        <div className="space-y-3 mb-6">
          {[
            { name: "Fitbit Charge 6", status: "Connected" },
            { name: "Apple Watch Series 9", status: "Connected" },
            { name: "Blood Pressure Cuff", status: "Connecting..." },
          ].map((device, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">{device.name}</p>
                <p className="text-xs text-slate-600">{device.status}</p>
              </div>
              <button className="text-red-600 text-sm font-semibold hover:underline">Remove</button>
            </div>
          ))}
        </div>
        <button className="w-full bg-neutral-400 text-white py-2 rounded font-semibold hover:opacity-90">
          Pair New Device
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
        </h2>
        <div className="space-y-4">
          {[
            { label: "Health Alerts", enabled: true },
            { label: "Medication Reminders", enabled: true },
            { label: "Appointment Reminders", enabled: true },
            { label: "Weekly Summary", enabled: false },
            { label: "Marketing Emails", enabled: false },
          ].map((notif, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="text-slate-900">{notif.label}</span>
              <button
                className={`relative w-12 h-6 rounded-full transition ${
                  notif.enabled ? "bg-green-500" : "bg-slate-300"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                    notif.enabled ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Emergency Contacts</h2>
        <div className="space-y-3 mb-6">
          {[
            { name: "Sarah Johnson", relation: "Spouse", phone: "(555) 123-4567" },
            { name: "Dr. Sarah Johnson", relation: "Primary Doctor", phone: "(555) 987-6543" },
          ].map((contact, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg">
              <p className="font-medium text-slate-900">{contact.name}</p>
              <p className="text-xs text-slate-600 mt-1">{contact.relation}</p>
              <p className="text-sm text-slate-900 font-semibold mt-2">{contact.phone}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-neutral-400 text-white py-2 rounded font-semibold hover:opacity-90">
          Add Emergency Contact
        </button>
      </div>

      {/* Accessibility */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Language & Accessibility</h2>
        <div className="space-y-4">
          {[
            { label: "Language", value: "English" },
            { label: "Font Size", value: "Medium" },
            { label: "Dark Mode", value: "Off" },
          ].map((setting, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="text-slate-600">{setting.label}</span>
              <button className="text-slate-900 font-semibold hover:underline">{setting.value}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Help & Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <HelpCircle className="w-8 h-8 text-neutral-400" />
          <div className="text-left">
            <p className="font-semibold text-slate-900">Help Center</p>
            <p className="text-xs text-slate-600">FAQs and tutorials</p>
          </div>
        </button>
        <button className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex items-center gap-4">
          <Lock className="w-8 h-8 text-neutral-400" />
          <div className="text-left">
            <p className="font-semibold text-slate-900">Privacy Policy</p>
            <p className="text-xs text-slate-600">Data & security</p>
          </div>
        </button>
      </div>

      {/* Logout */}
      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
        <LogOut className="w-5 h-5" />
        Sign Out
      </button>
    </div>
  )
}
