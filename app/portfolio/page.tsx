import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-12 text-center">PORTFOLIO</h1>

        {/* Sub-navigation */}
        <div className="flex justify-center space-x-8 mb-16">
          <Link
            href="/gallery"
            className="text-lg tracking-wider hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-2"
          >
            GALLERY
          </Link>
          <Link
            href="/events"
            className="text-lg tracking-wider hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-2"
          >
            EVENTS
          </Link>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Link href="/gallery" className="group">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In%20our%20latest%20Feed%20Article%2C%20we%20highlight%20%40zeedyasi_%2C%20a%20remarkable%20South%20African%20talent%20whose%20voi-pH7Lz4kz9vlZBDSIKx3w2ZLmrEisaZ.jpg"
                alt="Gallery preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold tracking-wider">GALLERY</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-6 mb-4 tracking-wider">GALLERY</h2>
            <p className="opacity-80 leading-relaxed">
              Explore a curated collection of artistic photography and visual storytelling that captures the essence of
              creativity and passion.
            </p>
          </Link>

          <Link href="/events" className="group">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/We%20are%20proud%20to%20announce%20that%20%40parismarktoon%20is%20writing%20and%20producing%20the%20upcoming%20album%20for%20one-8UE8Dml21jQPmawaMxJMnCdShmunVu.jpg"
                alt="Events preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-bold tracking-wider">EVENTS</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-6 mb-4 tracking-wider">EVENTS</h2>
            <p className="opacity-80 leading-relaxed">
              Discover upcoming performances, exhibitions, and exclusive events that showcase artistic excellence and
              creative innovation.
            </p>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6 tracking-wider">READY TO COLLABORATE?</h3>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Reach out to discuss your vision and bring your creative
            ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-foreground text-background px-8 py-4 font-bold tracking-wider hover:bg-foreground/90 transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </main>
  )
}
