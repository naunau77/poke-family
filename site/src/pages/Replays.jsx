export default function Replays() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-black mb-8">Replays Commentés</h1>
        <p className="text-xl text-gray-600 mb-12">Regardez nos meilleurs replays et tutoriels</p>
        
        <div className="space-y-4">
          {[
            { id: 1, title: 'VGC 2025 Finals — Stall vs Hyper Offense', date: '15 nov', duration: '38:45', views: '5.2K' },
            { id: 2, title: 'Guide : 6v6 Doubles Format', date: '10 nov', duration: '25:30', views: '3.8K' },
            { id: 3, title: 'Pikachu Comp Sweep — Moments Forts', date: '5 nov', duration: '15:20', views: '2.1K' },
            { id: 4, title: 'Championnat Régional 2025 — Highlights', date: '1 nov', duration: '42:10', views: '6.4K' },
            { id: 5, title: 'Breeding Shiny : Techniques Avancées', date: '25 oct', duration: '20:15', views: '1.9K' },
            { id: 6, title: 'Pokémon Paradox : Stratégies Modernes', date: '20 oct', duration: '35:50', views: '4.3K' }
          ].map((replay) => (
            <button
              key={replay.id}
              className="block bg-white border-l-4 border-pokemon-primary p-6 rounded hover:shadow-lg transition w-full text-left cursor-pointer"
            >
              <h3 className="text-xl font-black mb-2">{replay.title}</h3>
              <p className="text-sm text-gray-600">{replay.date} • {replay.duration} • 👁️ {replay.views}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
