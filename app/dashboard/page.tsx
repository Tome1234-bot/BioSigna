"use client"

import { useState, useEffect } from "react"
import { CircularProgress } from "@/components/circular-progress"
import { StatCard } from "@/components/stat-card"
import { ChartCard } from "@/components/chart-card"
import { LineChart } from "@/components/line-chart"
import { Heart, Zap, TrendingUp, AlertCircle, Clock, Activity } from "lucide-react"
import {
  generateHealthScore,
  generateHeartRate,
  generateBloodPressure,
  generateOxygenLevel,
  formatTime,
} from "@/lib/health-utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Dashboard() {
  const [healthScore, setHealthScore] = useState(85)
  const [heartRate, setHeartRate] = useState(72)
  const [bloodPressure, setBloodPressure] = useState("120/80")
  const [oxygenLevel, setOxygenLevel] = useState(98)
  const [stepCount, setStepCount] = useState(8234)
  const [stressLevel, setStressLevel] = useState(45)
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null)
  const [chartData, setChartData] = useState([
    { label: "12 AM", value: 65 },
    { label: "4 AM", value: 62 },
    { label: "8 AM", value: 70 },
    { label: "12 PM", value: 75 },
    { label: "4 PM", value: 78 },
    { label: "8 PM", value: 72 },
    { label: "12 AM", value: 68 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthScore(generateHealthScore())
      setHeartRate(generateHeartRate())
      setBloodPressure(generateBloodPressure())
      setOxygenLevel(generateOxygenLevel())
      setStepCount((prev) => Math.min(prev + Math.floor(Math.random() * 100), 30000))
      setStressLevel((prev) => Math.max(Math.min(prev + Math.floor((Math.random() - 0.5) * 10), 100), 0))

      setChartData((prev) => [...prev.slice(1), { label: formatTime(new Date()), value: generateHeartRate() + 10 }])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const recentActivity = [
    { time: "2:30 PM", activity: "Morning Run Completed", icon: "🏃" },
    { time: "12:15 PM", activity: "Meal Logged: Healthy Lunch", icon: "🥗" },
    { time: "10:45 AM", activity: "Meditation Session (15 min)", icon: "🧘" },
    { time: "8:20 AM", activity: "Morning Vitals Checked", icon: "💓" },
  ]

  const appointments = [
    { time: "Tomorrow, 10:00 AM", doctor: "Dr. Sarah Johnson", type: "General Checkup" },
    { time: "Friday, 2:30 PM", doctor: "Dr. Michael Chen", type: "Cardiology Review" },
    { time: "Next Week Monday", doctor: "Dr. Emily White", type: "Eye Examination" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Welcome back, John</h1>
        <p className="text-sm lg:text-base text-slate-600">Here's your health overview for today</p>
      </div>

      {/* Health Score and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm">
            <CircularProgress
              value={healthScore}
              label="Health Score"
              subLabel="Excellent"
              color="hsl(var(--vibrant-blue))"
              size={120}
            />
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
          <StatCard
            label="Heart Rate"
            value={heartRate}
            unit="bpm"
            icon={<Heart className="w-6 h-6" />}
            color="bg-vibrant-blue"
            trend={2}
          />
          <StatCard
            label="Blood Pressure"
            value={bloodPressure}
            unit="mmHg"
            icon={<Zap className="w-6 h-6" />}
            color="bg-vital-red"
            trend={-1}
          />
          <StatCard
            label="Oxygen Level"
            value={oxygenLevel}
            unit="%"
            icon={<Activity className="w-6 h-6" />}
            color="bg-fresh-green"
            trend={0}
          />
        </div>
      </div>

      {/* Charts and Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="lg:col-span-2">
          <ChartCard title="Heart Rate Trend (24 Hours)" footer="Last updated: 2 minutes ago">
            <LineChart data={chartData} color="hsl(var(--vibrant-blue))" height={200} />
          </ChartCard>
        </div>

        <div className="space-y-3 lg:space-y-4">
          <StatCard
            label="Steps Today"
            value={stepCount}
            unit="/ 10,000"
            icon={<TrendingUp className="w-6 h-6" />}
            color="bg-fresh-green"
            trend={15}
          />
          <StatCard
            label="Stress Level"
            value={stressLevel}
            unit="/ 100"
            icon={<AlertCircle className="w-6 h-6" />}
            color="bg-alert-orange"
            trend={-5}
          />
        </div>
      </div>

      {/* Appointments and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-sm lg:text-base">
            <Clock className="w-5 h-5 text-vibrant-blue" />
            Upcoming Appointments
          </h3>
          <div className="space-y-3">
            {appointments.map((apt, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0 cursor-pointer hover:bg-slate-50 p-2 rounded transition">
                    <div className="w-10 h-10 rounded-lg bg-vibrant-blue/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-vibrant-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-sm lg:text-base truncate">{apt.doctor}</p>
                      <p className="text-xs lg:text-sm text-slate-600">{apt.type}</p>
                      <p className="text-xs text-slate-500 mt-1">{apt.time}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-full max-w-sm mx-auto">
                  <DialogHeader>
                    <DialogTitle>{apt.doctor}</DialogTitle>
                    <DialogDescription>{apt.type}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Appointment Time</p>
                      <p className="text-sm text-slate-600 mt-1">{apt.time}</p>
                    </div>
                    <button className="w-full bg-vibrant-blue text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                      Confirm Appointment
                    </button>
                    <button className="w-full bg-slate-200 text-slate-900 py-2 rounded-lg font-semibold hover:bg-slate-300 transition">
                      Reschedule
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-4 lg:p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2 text-sm lg:text-base">
            <Activity className="w-5 h-5 text-fresh-green" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0">
                <span className="text-xl lg:text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs lg:text-sm font-medium text-slate-900">{item.activity}</p>
                  <p className="text-xs text-slate-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
