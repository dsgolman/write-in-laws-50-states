"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Sun, Moon } from 'lucide-react'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => <p className="text-center text-[#b0b0b0]">Loading PDF viewer...</p>
})

export default function EbookReaderPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  // Update this to point to your actual PDF file
  const pdfUrl = "/ebook-content/experiencing-mania.pdf"

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeMediaQuery.matches)

    const handleDarkModeChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)

    const mobileMediaQuery = window.matchMedia('(max-width: 640px)')
    setIsMobile(mobileMediaQuery.matches)
    setScale(mobileMediaQuery.matches ? 0.8 : 1)

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      setScale(e.matches ? 0.8 : 1)
    }
    mobileMediaQuery.addEventListener('change', handleMobileChange)

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)
      mobileMediaQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= numPages ? newPageNumber : prevPageNumber
    })
  }

  const handleZoom = (delta: number) => {
    setScale(prevScale => Math.max(0.5, Math.min(3, prevScale + delta)))
  }

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1e1e1e] text-gray-300' : 'bg-[#f6f3e9] text-gray-800'}`}>
      <header className={`sticky top-0 z-10 p-4 flex justify-between items-center ${
        isDarkMode ? 'bg-[#252525] border-b border-[#3a3a3a]' : 'bg-[#f6f3e9] shadow-md'
      }`}>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/experiencing-mania">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-lg font-semibold">Experiencing Mania in America</h1>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </header>

      <main className="flex-1 overflow-auto flex justify-center items-start p-4">
        <PDFViewer
          url={pdfUrl}
          pageNumber={pageNumber}
          scale={scale}
          onDocumentLoadSuccess={({ numPages }) => setNumPages(numPages)}
        />
      </main>

      <footer className={`sticky bottom-0 z-10 p-4 ${
        isDarkMode ? 'bg-[#252525] border-t border-[#3a3a3a]' : 'bg-[#f6f3e9] shadow-md'
      }`}>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(-0.1)}
            className={isDarkMode ? 'hover:bg-[#3a3a3a]' : ''}
          >
            <ZoomOut className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(0.1)}
            className={isDarkMode ? 'hover:bg-[#3a3a3a]' : ''}
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            className={isDarkMode ? 'hover:bg-[#3a3a3a]' : ''}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <Input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={(e) => setPageNumber(Number(e.target.value))}
              className={`w-16 text-center ${isDarkMode ? 'bg-[#3a3a3a] border-[#4a4a4a]' : ''}`}
            />
            <span className="mx-2">/ {numPages || '...'}</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => changePage(1)} 
            disabled={pageNumber >= numPages}
            className={isDarkMode ? 'hover:bg-[#3a3a3a]' : ''}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  )
}

