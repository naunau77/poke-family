export default function Articles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-black mb-8">Articles</h1>
        <p className="text-xl text-gray-600 mb-12">Guides compétitifs et stratégies Pokémon</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: 'Guide Compétitif pour débuter', author: 'Pokémon Master', date: '15 nov' },
            { id: 2, title: 'Top 10 Pokémon Compétitifs 2025', author: 'Stratégiste', date: '10 nov' },
            { id: 3, title: 'Stratégies Avancées : Double Format', author: 'Champion', date: '5 nov' },
            { id: 4, title: 'Types Faibles : Comment les Utiliser', author: 'Expert', date: '1 nov' },
            { id: 5, title: 'Breeding Compétitif : Guide Complet', author: 'Breeder', date: '25 oct' },
            { id: 6, title: 'Métagame Switch : Évolution 2024-2025', author: 'Analyste', date: '20 oct' }
          ].map((article) => (
            <article key={article.id} className="bg-white rounded-lg border shadow-md hover:shadow-xl transition p-6">
              <h3 className="text-xl font-black mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{article.author} • {article.date}</p>
              <button className="text-pokemon-primary font-semibold hover:underline cursor-pointer">
                Lire →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
