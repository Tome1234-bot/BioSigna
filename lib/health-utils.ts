// Utility functions for health app data generation and updates

export function generateHealthScore(): number {
  return Math.floor(Math.random() * 30) + 70 // 70-100
}

export function generateHeartRate(): number {
  return Math.floor(Math.random() * 30) + 60 // 60-90
}

export function generateBloodPressure(): string {
  const systolic = Math.floor(Math.random() * 20) + 110
  const diastolic = Math.floor(Math.random() * 15) + 70
  return `${systolic}/${diastolic}`
}

export function generateOxygenLevel(): number {
  return Math.floor(Math.random() * 5) + 95 // 95-100
}

export function generateStepCount(): number {
  return Math.floor(Math.random() * 10000) + 5000 // 5000-15000
}

export function generateCaloiresCalories(): number {
  return Math.floor(Math.random() * 1000) + 1500 // 1500-2500
}

export function generateSleepHours(): number {
  return Math.floor(Math.random() * 4) + 6 // 6-10 hours
}

export function generateStressLevel(): number {
  return Math.floor(Math.random() * 40) + 30 // 30-70
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
