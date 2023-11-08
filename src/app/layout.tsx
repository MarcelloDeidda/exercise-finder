import type { Metadata } from 'next'
import { Poppins } from "next/font/google";

import Navbar from '@/components/UI/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Exercise Finder',
  description: 'Discover a wide range of exercises to train a specific muscle group.',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div id="overlays" />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
