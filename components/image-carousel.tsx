"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We%20are%20proud%20to%20announce%20that%20%40parismarktoon%20is%20writing%20and%20producing%20the%20upcoming%20album%20for%20one-8UE8Dml21jQPmawaMxJMnCdShmunVu.jpg", // Glamorous white feathered outfit
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In%20our%20latest%20Feed%20Article%2C%20we%20highlight%20%40zeedyasi_%2C%20a%20remarkable%20South%20African%20talent%20whose%20voi-pH7Lz4kz9vlZBDSIKx3w2ZLmrEisaZ.jpg", // Magazine-style Feed Article layout
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF%20%281%29-nX6YsYwMtxkntJOCt1pH2GXmZ3R0UZ.jpg", // Yellow sweater, warm smile
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF-PofYmwxLWN1S2uousiep2VHxe3rYkk.jpg", // Yellow outfit, glamour shot
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF%20%282%29-7dj4lv0F48vo4CsfXC9hW1qo8xoY9l.jpg", // Joyful laughing in yellow
]

const getImagePosition = (index: number) => {
  switch (index) {
    case 2: // "Vibing with my soul (1)" - needs more centered positioning
      return "center 40%"
    default:
      return "center 20%"
  }
}

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    console.log("[v0] Going to previous image")
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToNext = () => {
    console.log("[v0] Going to next image")
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Auto-advance images every 3 seconds with flash effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    setStartX(e.touches[0].clientX)
    setStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    // Prevent scrolling while swiping
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    setIsDragging(false)

    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = startX - endX
    const deltaY = startY - endY

    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Mouse drag functionality for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setIsDragging(false)

    const deltaX = startX - e.clientX

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main flashing image display */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundPosition: getImagePosition(index),
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable image strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black/60 backdrop-blur-sm">
        <div
          ref={containerRef}
          className="flex h-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicate images for infinite scroll effect */}
          {[...images, ...images, ...images].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-full relative cursor-pointer group"
              onClick={() => {
                setCurrentIndex(index % images.length)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundPosition: getImagePosition(index % images.length),
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              {index % images.length === currentIndex && <div className="absolute inset-0 border-2 border-white" />}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
          />
        ))}
      </div>
    </div>
  )
}
