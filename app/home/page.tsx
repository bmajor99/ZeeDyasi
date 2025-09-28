import { ImageCarousel } from "@/components/image-carousel"
import { StarPattern } from "@/components/star-pattern"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen overflow-hidden">
        <ImageCarousel />
        <StarPattern />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4 text-balance">WELCOME</h1>
            <p className="text-lg md:text-xl tracking-widest opacity-80">EXPERIENCE THE ARTISTRY</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">ARTISTIC VISION</h2>
          <p className="text-lg leading-relaxed opacity-80 mb-12">
            Discover a world where creativity meets passion, where every moment is captured with precision and artistry.
            This is more than just a portfolio - it's a journey through visual storytelling.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">VISION</h3>
              <p className="opacity-80">Creating timeless moments through the lens of innovation.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">PASSION</h3>
              <p className="opacity-80">Every project is infused with dedication and artistic integrity.</p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 tracking-wider">EXCELLENCE</h3>
              <p className="opacity-80">Pushing boundaries to deliver extraordinary results.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
