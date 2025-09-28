"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We%20are%20proud%20to%20announce%20that%20%40parismarktoon%20is%20writing%20and%20producing%20the%20upcoming%20album%20for%20one-8UE8Dml21jQPmawaMxJMnCdShmunVu.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In%20our%20latest%20Feed%20Article%2C%20we%20highlight%20%40zeedyasi_%2C%20a%20remarkable%20South%20African%20talent%20whose%20voi-pH7Lz4kz9vlZBDSIKx3w2ZLmrEisaZ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF%20%281%29-nX6YsYwMtxkntJOCt1pH2GXmZ3R0UZ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF-PofYmwxLWN1S2uousiep2VHxe3rYkk.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Just%20getting%20started.%20Everything%20from%20here%20is%20growth.%20%E2%9D%A4%EF%B8%8FSaturday%20is%20more%20than%20just%20a%20track%20it's%20-IX79V.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vibing%20with%20my%20soul%20%F0%9F%94%AE%F0%9F%A7%BF%20%282%29-7dj4lv0F48vo4CsfXC9hW1qo8xoY9l.jpg",
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-12 text-center">GALLERY</h1>

        <p className="text-center text-lg opacity-80 mb-12 max-w-3xl mx-auto">
          A visual journey through Zee Dyasi's artistic evolution - from studio sessions to magazine features, capturing
          the essence of a rising South African soul artist.
        </p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Zee Dyasi gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold tracking-wider">VIEW</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected gallery image"
                width={800}
                height={600}
                className="object-contain max-w-full max-h-full"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
