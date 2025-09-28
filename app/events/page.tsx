import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      date: "2024-12-15",
      title: "SATURDAY SINGLE RELEASE",
      location: "Digital Release Worldwide",
      description:
        "The debut single 'Saturday' drops across all streaming platforms, marking the beginning of Zee's musical journey.",
    },
    {
      date: "2025-02-20",
      title: "LIVE STUDIO SESSION",
      location: "Johannesburg, South Africa",
      description: "Intimate live recording session with Paris Mark Toon and Mothers Favorite Child collective.",
    },
    {
      date: "2025-04-10",
      title: "DEBUT ALBUM LISTENING PARTY",
      location: "Cape Town Music Venue",
      description:
        "Exclusive first listen to the upcoming debut album featuring collaborations with international artists.",
    },
    {
      date: "2025-06-05",
      title: "SOUTH AFRICAN TOUR ANNOUNCEMENT",
      location: "Multiple Cities, SA",
      description: "Official announcement and ticket release for Zee Dyasi's first national tour across South Africa.",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="relative h-96 mb-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Just%20getting%20started.%20Everything%20from%20here%20is%20growth.%20%E2%9D%A4%EF%B8%8FSaturday%20is%20more%20than%20just%20a%20track%20it%E2%80%99s%20-FvHHCO9CB8JAOLd8lPQa5efEckrlfi.jpg"
          alt="Zee Dyasi Events"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white">EVENTS</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="border-b border-border pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-3xl font-bold tracking-wider mb-2 md:mb-0">{event.title}</h2>
                <span className="text-lg opacity-80 tracking-wider">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-lg opacity-80 mb-2 tracking-wider">{event.location}</p>
              <p className="opacity-70 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center border-t border-border pt-16">
          <h3 className="text-4xl font-bold mb-6 tracking-wider">STAY UPDATED</h3>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Be the first to know about new releases, tour dates, and exclusive behind-the-scenes content from Zee Dyasi.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="bg-foreground text-background px-6 py-3 font-bold tracking-wider hover:bg-foreground/90 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
