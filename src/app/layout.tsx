import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import { NextFont } from 'next/dist/compiled/@next/font';

import Navbar from '@/components/UI/Navbar'
import './globals.css'

// Set metadata
export const metadata: Metadata = {
  title: 'Exercise Finder',
  description: 'Discover a wide range of exercises to train a specific muscle group.',
}

// Set font
const poppins: NextFont = Poppins({
  weight: '400',
  subsets: ['latin']
})

// Layout boilerplate
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Modal overlays*/}
        <div id="overlays" />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
