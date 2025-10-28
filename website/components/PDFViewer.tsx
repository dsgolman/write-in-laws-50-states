"use client"

import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
  url: string
  pageNumber: number
  scale: number
  onDocumentLoadSuccess: (pdf: { numPages: number }) => void
}

export default function PDFViewer({ url, pageNumber, scale, onDocumentLoadSuccess }: PDFViewerProps) {
  return (
    <Document
      file={url}
      onLoadSuccess={onDocumentLoadSuccess}
      className="flex justify-center"
    >
      <Page
        pageNumber={pageNumber}
        scale={scale}
        className="shadow-lg"
        renderTextLayer={true}
        renderAnnotationLayer={true}
      />
    </Document>
  )
}

