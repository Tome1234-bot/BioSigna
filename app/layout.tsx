import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BioSigna - Smart Health Management",
  description: "Comprehensive health monitoring and wellness management system",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden`}>
        <div className="flex h-screen bg-slate-50">
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
