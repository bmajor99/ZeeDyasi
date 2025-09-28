import { ImageCarousel } from "@/components/image-carousel"
import { StarPattern } from "@/components/star-pattern"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen overflow-hidden">
        <ImageCarousel />
        <StarPattern />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4 text-balance">ZEE DYASI</h1>
            <p className="text-lg md:text-xl tracking-widest opacity-80">SOUTH AFRICAN SOUL VOCALIST</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">MUSICAL ARTISTRY</h2>
          <p className="text-lg leading-relaxed opacity-80 mb-12">
            Experience the powerful blend of R&B, soul, and jazz through the voice of South Africa's rising star. From
            Idols South Africa to international collaborations, witness a journey of authentic musical expression.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">R&B SOUL</h3>
              <p className="opacity-80">Contemporary sounds rooted in timeless soul traditions.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">JAZZ FUSION</h3>
              <p className="opacity-80">Sophisticated arrangements with live instrumentation.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">GLOBAL REACH</h3>
              <p className="opacity-80">Collaborating with international producers and artists.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
