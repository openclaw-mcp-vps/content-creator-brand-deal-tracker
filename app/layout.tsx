import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brand Deal Tracker — Track & Optimize Brand Partnerships',
  description: 'Monitor brand deal performance metrics, track payment schedules, and get ROI analytics. Built for YouTubers, influencers, and content creators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3e08341f-2ea0-42e9-9d2b-02d8ee2fb524"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
