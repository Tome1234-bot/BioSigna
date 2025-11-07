"use client"

import { useState, useEffect } from "react"
import { StatCard } from "@/components/stat-card"
import { CircularProgress } from "@/components/circular-progress"
import { ChartCard } from "@/components/chart-card"
import { LineChart } from "@/components/line-chart"
import { Apple, Moon, Pill, Brain, Dumbbell, Users, Target, TrendingUp } from "lucide-react"
import { formatTime } from "@/lib/health-utils"

export default function Lifestyle() {
  const [nutritionScore, setNutritionScore] = useState(78)
  const [meditationMinutes, setMeditationMinutes] = useState(15)
  const [sleepHours, setSleepHours] = useState(7.5)
  const [exerciseMinutes, setExerciseMinutes] = useState(45)
  const [medsAdherence, setMedsAdherence] = useState(92)
  const [socialScore, setSocialScore] = useState(65)

  const [nutritionTrend, setNutritionTrend] = useState([
    { label: "Mon", value: 72 },
    { label: "Tue", value: 75 },
    { label: "Wed", value: 78 },
    { label: "Thu", value: 80 },
    { label: "Fri", value: 78 },
    { label: "Sat", value: 82 },
    { label: "Sun", value: 78 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setNutritionScore((prev) => {
        const change = Math.floor((Math.random() - 0.5) * 5)
        return Math.max(Math.min(prev + change, 100), 0)
      })
      setMeditationMinutes((prev) => prev + Math.floor(Math.random() * 5))
      setSleepHours((prev) => Math.max(Math.min(prev + (Math.random() - 0.5) * 0.5, 10), 5))
      setExerciseMinutes((prev) => prev + Math.floor(Math.random() * 20))
      setMedsAdherence((prev) => Math.min(prev + Math.floor(Math.random() * 2), 100))
      setSocialScore((prev) => Math.max(Math.min(prev + Math.floor((Math.random() - 0.5) * 8), 100), 0))

      setNutritionTrend((prev) => [
        ...prev.slice(1),
        { label: formatTime(new Date()), value: Math.floor(Math.random() * 30) + 70 },
      ])
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const meals = [
    { time: "8:30 AM", meal: "Breakfast", items: "Oatmeal with berries & almonds", calories: 350, score: "Good" },
    {
      time: "1:15 PM",
      meal: "Lunch",
      items: "Grilled chicken salad with olive oil",
      calories: 420,
      score: "Excellent",
    },
    { time: "4:00 PM", meal: "Snack", items: "Greek yogurt & granola", calories: 180, score: "Good" },
  ]

  const medications = [
    { name: "Lisinopril 10mg", frequency: "Once daily", adherence: 98, lastTaken: "7:00 AM" },
    { name: "Metformin 1000mg", frequency: "Twice daily", adherence: 92, lastTaken: "1:30 PM" },
    { name: "Vitamin D3 2000IU", frequency: "Once daily", adherence: 85, lastTaken: "Missed yesterday" },
  ]

  const habits = [
    { name: "Morning Walks", streak: 12, frequency: "Daily", goal: 30 },
    { name: "Water Intake", streak: 8, frequency: "Daily", goal: 8 },
    { name: "No Sugary Drinks", streak: 15, frequency: "Daily", goal: 30 },
    { name: "Bedtime Routine", streak: 5, frequency: "Daily", goal: 30 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Lifestyle & Behavioral Tracking</h1>
        <p className="text-slate-600">Monitor nutrition, sleep, exercise, and wellness habits</p>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <CircularProgress
            value={nutritionScore}
            label="Nutrition Score"
            subLabel="Balanced"
            color="hsl(var(--fresh-green))"
            size={150}
          />
        </div>

        <StatCard
          label="Sleep Duration"
          value={sleepHours.toFixed(1)}
          unit="hours"
          icon={<Moon className="w-6 h-6" />}
          color="bg-fresh-green"
          trend={5}
        />

        <StatCard
          label="Exercise Today"
          value={exerciseMinutes}
          unit="minutes"
          icon={<Dumbbell className="w-6 h-6" />}
          color="bg-fresh-green"
          trend={12}
        />
      </div>

      {/* Nutrition Manager and Sleep Architect */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartCard title="Nutrition Score Trend" footer="Weekly progression">
            <LineChart data={nutritionTrend} color="hsl(var(--fresh-green))" height={250} />
          </ChartCard>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-fresh-green" />
            Daily Goals Progress
          </h3>
          <div className="space-y-4">
            {[
              { goal: "Calories", current: 1420, target: 2000 },
              { goal: "Protein", current: 85, target: 120 },
              { goal: "Steps", current: 8234, target: 10000 },
              { goal: "Water", current: 6, target: 8 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-slate-900">{item.goal}</p>
                  <p className="text-sm text-slate-600">
                    {item.current} / {item.target}
                  </p>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-fresh-green"
                    style={{ width: `${Math.min((item.current / item.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nutrition and Medication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Nutrition Manager */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Apple className="w-5 h-5 text-fresh-green" />
            Nutrition Manager
          </h3>
          <div className="space-y-4">
            {meals.map((meal, i) => (
              <div key={i} className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-slate-900">{meal.meal}</p>
                    <p className="text-xs text-slate-600 mt-1">{meal.items}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      meal.score === "Excellent" ? "bg-green-200 text-green-800" : "bg-blue-200 text-blue-800"
                    }`}
                  >
                    {meal.score}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-green-200">
                  <span>{meal.time}</span>
                  <span>{meal.calories} kcal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medication Adherence */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Pill className="w-5 h-5 text-fresh-green" />
            Medication Adherence
          </h3>
          <div className="space-y-4">
            {medications.map((med, i) => (
              <div key={i} className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-slate-900">{med.name}</p>
                    <p className="text-xs text-slate-600 mt-1">{med.frequency}</p>
                  </div>
                  <p className="text-lg font-bold text-fresh-green">{med.adherence}%</p>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-fresh-green" style={{ width: `${med.adherence}%` }} />
                </div>
                <p className="text-xs text-slate-500">{med.lastTaken}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mental Health and Social Wellness */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Mental Health Monitor */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-deep-purple" />
            Mental Health Monitor
          </h3>
          <div className="space-y-4">
            {[
              { metric: "Meditation Sessions", value: meditationMinutes, goal: 30, unit: "min" },
              { metric: "Stress Level", value: 45, goal: 30, unit: "%" },
              { metric: "Mood Score", value: 7.5, goal: 8, unit: "/10" },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-slate-900">{item.metric}</p>
                  <p className="text-sm font-bold text-slate-900">
                    {item.value} {item.unit}
                  </p>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-deep-purple"
                    style={{ width: `${Math.min((item.value / item.goal) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Wellness */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-warm-coral" />
            Social Wellness
          </h3>
          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-2">Social Connection Score</p>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-warm-coral" style={{ width: `${socialScore}%` }} />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900">{socialScore}%</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { activity: "Family Connections", frequency: "Daily", status: "Active" },
              { activity: "Friends Meetups", frequency: "Weekly", status: "Scheduled" },
              { activity: "Group Activities", frequency: "Monthly", status: "Pending" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-coral-50 rounded">
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.activity}</p>
                  <p className="text-xs text-slate-500">{item.frequency}</p>
                </div>
                <span className="text-xs font-medium text-warm-coral">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Habit Builder */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-fresh-green" />
          Habit Builder - Current Streaks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {habits.map((habit, i) => (
            <div
              key={i}
              className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100"
            >
              <p className="font-medium text-slate-900 mb-3">{habit.name}</p>
              <div className="flex items-end gap-2 mb-4">
                <p className="text-3xl font-bold text-fresh-green">{habit.streak}</p>
                <p className="text-xs text-slate-600 mb-1">day streak</p>
              </div>
              <div className="mb-3">
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-fresh-green" style={{ width: `${(habit.streak / habit.goal) * 100}%` }} />
                </div>
              </div>
              <p className="text-xs text-slate-600">Goal: {habit.goal} days</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
