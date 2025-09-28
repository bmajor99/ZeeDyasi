import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-8">ABOUT ZEE</h1>
            <div className="w-24 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide">MY STORY</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zee Dyasi is a dynamic South African vocalist blending R&B, soul, and jazz into a sound that is both
                contemporary and timeless. With a voice that channels deep emotion and raw power, Zee first rose to
                national prominence as a Top 5 finalist on Idols South Africa Season 18, captivating audiences across
                the country with her standout performances and unmistakable stage presence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now stepping fully into her artistry, Zee is currently recording her debut album in collaboration with
                award-winning U.S. producer Paris Mark Toon and his Billboard charting soul jazz collective Mothers
                Favorite Child, known for their work with legends like George Benson, CeCe Peniston, Robin S., and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project blends lush live instrumentation with modern R&B, soul, and jazz production, showcasing
                Zee's undeniable vocal talent and authenticity. With new music on the way and a live tour in
                development, Zee is poised to become one of South Africa's leading voices in the global soul movement.
                Her performances deliver power, intimacy, and presence, backed by a creative team dedicated to building
                her career across both local and international stages.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Just%20getting%20started.%20Everything%20from%20here%20is%20growth.%20%E2%9D%A4%EF%B8%8FSaturday%20is%20more%20than%20just%20a%20track%20it%E2%80%99s%20-FvHHCO9CB8JAOLd8lPQa5efEckrlfi.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">TOP 5</div>
              <div className="text-muted-foreground tracking-wider">IDOLS SA FINALIST</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">3</div>
              <div className="text-muted-foreground tracking-wider">MUSIC GENRES</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1</div>
              <div className="text-muted-foreground tracking-wider">DEBUT ALBUM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm tracking-wider">© 2025 ZEE DYASI. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  )
}
