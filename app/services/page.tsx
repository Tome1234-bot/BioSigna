"use client"

import { useState } from "react"
import { Smartphone, Clock, MessageSquare, FileText, Video, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Services() {
  const [selectedConsult, setSelectedConsult] = useState<string | null>(null)

  const consultations = [
    {
      id: "1",
      title: "General Consultation",
      description: "Talk to a healthcare professional about general health concerns",
      duration: "15-30 min",
      price: "$25",
      available: true,
      nextSlot: "In 10 minutes",
    },
    {
      id: "2",
      title: "Specialist Consultation",
      description: "Connect with a board-certified specialist",
      duration: "30-45 min",
      price: "$60",
      available: true,
      nextSlot: "In 2 hours",
    },
    {
      id: "3",
      title: "Follow-up Visit",
      description: "Check-in with your previous doctor",
      duration: "15 min",
      price: "$15",
      available: false,
      nextSlot: "Tomorrow 2 PM",
    },
  ]

  const specialists = [
    { id: "1", name: "Dr. Cardiologist", specialty: "Cardiology", rating: 4.8, reviews: 342, available: true },
    { id: "2", name: "Dr. Neurologist", specialty: "Neurology", rating: 4.9, reviews: 285, available: true },
    { id: "3", name: "Dr. Dermatologist", specialty: "Dermatology", rating: 4.7, reviews: 156, available: false },
    { id: "4", name: "Dr. Endocrinologist", specialty: "Endocrinology", rating: 4.6, reviews: 198, available: true },
  ]

  const prescriptions = [
    {
      id: "1",
      medication: "Lisinopril 10mg",
      prescriber: "Dr. Sarah Johnson",
      quantity: "30 tablets",
      refills: 2,
      status: "Active",
    },
    {
      id: "2",
      medication: "Metformin 1000mg",
      prescriber: "Dr. James Wilson",
      quantity: "60 tablets",
      refills: 1,
      status: "Refill Requested",
    },
  ]

  const consultationHistory = [
    {
      id: "1",
      doctor: "Dr. Sarah Johnson",
      specialty: "General Practice",
      date: "Nov 5, 2024",
      notes: "Regular checkup - all vitals normal",
      prescription: "Vitamin D supplementation",
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "Oct 28, 2024",
      notes: "Heart rate and blood pressure reviewed",
      prescription: "Continue current regimen",
    },
    {
      id: "3",
      doctor: "Dr. Emily White",
      specialty: "Nutrition",
      date: "Oct 15, 2024",
      notes: "Dietary adjustments discussed",
      prescription: "Increase fiber intake",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Virtual Health Services</h1>
        <p className="text-sm lg:text-base text-slate-600">Connect with healthcare professionals instantly</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        {[
          { icon: Video, label: "Instant Consult", color: "bg-teal-green" },
          { icon: Calendar, label: "Book Appointment", color: "bg-teal-green" },
          { icon: FileText, label: "AI-Generated Dossier", color: "bg-teal-green" },
          { icon: Smartphone, label: "Low-Bandwidth Mode", color: "bg-teal-green" },
        ].map((action, i) => {
          const Icon = action.icon
          return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button
                  className={`${action.color} text-white rounded-lg p-3 lg:p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-2 text-xs lg:text-sm font-semibold`}
                >
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  <span className="text-center">{action.label}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-sm mx-auto">
                <DialogHeader>
                  <DialogTitle>{action.label}</DialogTitle>
                  <DialogDescription>Start a new {action.label.toLowerCase()}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">This feature is ready to use. Click continue to proceed.</p>
                  <button className="w-full bg-teal-green text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    Continue
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>

      {/* Consultation Options */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">Instant Consult Launcher</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {consultations.map((consult) => (
            <div
              key={consult.id}
              onClick={() => setSelectedConsult(consult.id)}
              className={`p-4 lg:p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedConsult === consult.id
                  ? "border-teal-green bg-teal-50"
                  : "border-slate-200 bg-white hover:border-teal-green"
              } ${!consult.available ? "opacity-60" : ""}`}
            >
              <h3 className="font-semibold text-slate-900 mb-2 text-sm lg:text-base">{consult.title}</h3>
              <p className="text-xs lg:text-sm text-slate-600 mb-4">{consult.description}</p>
              <div className="flex items-center justify-between mb-4 text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600">{consult.duration}</span>
                </div>
                <span className="text-lg font-bold text-teal-green">{consult.price}</span>
              </div>
              {consult.available ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-teal-green text-white py-2 rounded font-semibold text-xs lg:text-sm hover:opacity-90 transition">
                      Start Now ({consult.nextSlot})
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-sm mx-auto">
                    <DialogHeader>
                      <DialogTitle>{consult.title}</DialogTitle>
                      <DialogDescription>{consult.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Next Available Slot</p>
                        <p className="text-sm text-slate-600 mt-1">{consult.nextSlot}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Duration</p>
                        <p className="text-sm text-slate-600 mt-1">{consult.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Price</p>
                        <p className="text-sm text-teal-green font-bold mt-1">{consult.price}</p>
                      </div>
                      <button className="w-full bg-teal-green text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                        Confirm Booking
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <button className="w-full bg-slate-300 text-slate-600 py-2 rounded font-semibold text-xs lg:text-sm cursor-not-allowed">
                  Next: {consult.nextSlot}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Specialist Matching */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">Specialist Matching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-teal-green/20 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-1 text-sm lg:text-base">{specialist.name}</h3>
              <p className="text-xs text-slate-600 mb-3">{specialist.specialty}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${i < Math.floor(specialist.rating) ? "text-yellow-400" : "text-slate-300"}`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-slate-600 ml-1">({specialist.reviews})</span>
              </div>
              {specialist.available ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-teal-green text-white py-2 rounded font-semibold text-xs lg:text-sm hover:opacity-90 transition">
                      Book Consultation
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-sm mx-auto">
                    <DialogHeader>
                      <DialogTitle>{specialist.name}</DialogTitle>
                      <DialogDescription>{specialist.specialty}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${i < Math.floor(specialist.rating) ? "text-yellow-400" : "text-slate-300"}`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-sm text-slate-600 ml-1">({specialist.reviews} reviews)</span>
                      </div>
                      <button className="w-full bg-teal-green text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                        Schedule Appointment
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <button className="w-full bg-slate-200 text-slate-500 py-2 rounded font-semibold text-xs lg:text-sm cursor-not-allowed">
                  Unavailable
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prescription Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-sm lg:text-base">
            <FileText className="w-5 h-5 text-teal-green" />
            Prescription Management
          </h3>
          <div className="space-y-4">
            {prescriptions.map((rx) => (
              <div key={rx.id} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <p className="font-medium text-slate-900 text-sm lg:text-base">{rx.medication}</p>
                    <p className="text-xs text-slate-600 mt-1">by {rx.prescriber}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      rx.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {rx.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs lg:text-sm text-slate-600 mb-3 flex-wrap gap-2">
                  <span>{rx.quantity}</span>
                  <span>Refills: {rx.refills}</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full text-xs lg:text-sm font-semibold text-teal-green hover:text-teal-700 bg-teal-50 py-2 rounded transition">
                      Request Refill
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-sm mx-auto">
                    <DialogHeader>
                      <DialogTitle>Request Refill</DialogTitle>
                      <DialogDescription>{rx.medication}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Medication</p>
                        <p className="text-sm text-slate-600 mt-1">{rx.medication}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Remaining Refills</p>
                        <p className="text-sm text-slate-600 mt-1">{rx.refills} refills available</p>
                      </div>
                      <button className="w-full bg-teal-green text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                        Submit Refill Request
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation History */}
        <div className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-sm lg:text-base">
            <MessageSquare className="w-5 h-5 text-teal-green" />
            Consultation History
          </h3>
          <div className="space-y-4">
            {consultationHistory.map((consult) => (
              <div
                key={consult.id}
                className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <p className="font-medium text-slate-900 text-sm lg:text-base">{consult.doctor}</p>
                    <p className="text-xs text-slate-600">{consult.specialty}</p>
                  </div>
                  <span className="text-xs text-slate-500">{consult.date}</span>
                </div>
                <p className="text-xs lg:text-sm text-slate-600 mb-2">{consult.notes}</p>
                <p className="text-xs font-medium text-teal-green">Rx: {consult.prescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinical Dossier Generator */}
      <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg p-4 lg:p-6 border border-teal-200">
        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-sm lg:text-base">
          <FileText className="w-5 h-5" />
          AI-Triggered Clinical Dossier Generator
        </h3>
        <p className="text-xs lg:text-sm text-slate-600 mb-4">
          Automatically generated comprehensive health report for specialists. Updated in real-time from your health
          data.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-teal-green text-white px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm lg:text-base hover:opacity-90 transition">
              Generate & Download Dossier
            </button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-sm mx-auto">
            <DialogHeader>
              <DialogTitle>Clinical Dossier</DialogTitle>
              <DialogDescription>Generate your comprehensive health report</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Your clinical dossier is being generated with the latest health data...
              </p>
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-xs text-slate-600">Generating report...</p>
                <div className="w-full bg-slate-300 h-2 rounded mt-2">
                  <div className="bg-teal-green h-2 rounded" style={{ width: "75%" }}></div>
                </div>
              </div>
              <button className="w-full bg-teal-green text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Download PDF
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
