"use client"

import { CreditCard, CheckCircle, Zap } from "lucide-react"

export default function Subscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Subscription & Monetization</h1>
        <p className="text-slate-600">Manage your premium features and billing</p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-br from-golden-yellow to-amber-400 text-white rounded-lg p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
        <p className="text-amber-50 mb-6">Unlimited access to all features</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-4xl font-bold">
              $9.99<span className="text-lg">/mo</span>
            </p>
            <p className="text-amber-100 text-sm mt-2">Renews Dec 15, 2024</p>
          </div>
          <button className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:opacity-90">
            Manage Plan
          </button>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">All Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Basic",
              price: "Free",
              features: ["Core Health Tracking", "Basic Analytics", "Mobile App", "Limited Integrations"],
              current: false,
            },
            {
              name: "Premium",
              price: "$9.99/mo",
              features: [
                "Full Health Tracking",
                "Advanced Analytics",
                "AI Insights",
                "Full Integrations",
                "Priority Support",
              ],
              current: true,
            },
            {
              name: "Family",
              price: "$19.99/mo",
              features: ["All Premium Features", "Up to 6 Members", "Family Dashboard", "Group Analytics"],
              current: false,
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 border-2 ${
                plan.current ? "border-golden-yellow bg-yellow-50" : "border-slate-200 bg-white"
              } shadow-sm`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                {plan.current && (
                  <span className="px-2 py-1 bg-golden-yellow text-white rounded text-xs font-semibold">Current</span>
                )}
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded font-semibold transition ${
                  plan.current
                    ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                    : "bg-golden-yellow text-white hover:opacity-90"
                }`}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Payment Methods */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-golden-yellow" />
            Payment Methods
          </h3>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-900">Visa ending in 4242</p>
                <p className="text-sm text-slate-600 mt-1">Expires 12/25</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Default</span>
            </div>
          </div>
          <button className="w-full border border-golden-yellow text-golden-yellow py-2 rounded font-semibold hover:bg-yellow-50">
            Add Payment Method
          </button>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Billing History</h3>
          <div className="space-y-3">
            {[
              { date: "Nov 15, 2024", amount: "$9.99", status: "Paid" },
              { date: "Oct 15, 2024", amount: "$9.99", status: "Paid" },
              { date: "Sep 15, 2024", amount: "$9.99", status: "Paid" },
            ].map((invoice, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 text-sm">{invoice.date}</p>
                  <p className="text-xs text-slate-600">{invoice.status}</p>
                </div>
                <p className="font-semibold text-slate-900">{invoice.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manage Subscription */}
      <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg p-6 border border-yellow-300">
        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Manage Your Subscription
        </h3>
        <p className="text-slate-700 mb-4">You can cancel anytime. No questions asked.</p>
        <div className="flex gap-3">
          <button className="flex-1 bg-white text-slate-900 py-2 rounded font-semibold hover:shadow-md transition">
            Change Plan
          </button>
          <button className="flex-1 border border-red-300 text-red-700 py-2 rounded font-semibold hover:bg-red-50 transition">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  )
}
