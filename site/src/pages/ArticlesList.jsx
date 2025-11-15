import { ARTICLES } from '../data/articles'
import { getArticleArtwork, getArticleTheme } from '../utils/articleAssets'

function ArticlePreviewCard({ article, onNavigate }) {
  const artwork = getArticleArtwork(article.slug)
  const theme = getArticleTheme(article.category)

  return (
    <button
      onClick={() => onNavigate('article-detail', article.slug)}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition flex flex-col text-left"
    >
      <div className="relative h-48">
        <img src={artwork.hero} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
        <div className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white shadow"
          style={{ background: `linear-gradient(120deg, ${theme.primary}, ${theme.secondary})` }}
        >
          {theme.badge} {article.category}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl font-black leading-tight">{article.title}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">{article.date} • {article.readingTime}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-700 flex-grow">{article.description}</p>
        <span className="mt-4 text-pokemon-primary font-semibold">Lire l’article →</span>
      </div>
    </button>
  )
}

export default function ArticlesList({ onNavigate }) {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: 'radial-gradient(circle at top, #050816 0%, #0f172a 50%, #111827 100%)' }}>
      <div className="absolute inset-0 opacity-30">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/pokemon-masters/pokemon-masters-05.jpg" alt="Fond" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="container mx-auto px-4 relative z-10 space-y-10">
        <header className="text-center text-white space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Archives du réseau de Lognes</p>
          <h1 className="text-5xl font-black">Articles & Guides</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Choisis un dossier stratégique pour entrer dans les coulisses des ligues, des duos doubles et des légendaires qui accompagnent Naulynn.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <ArticlePreviewCard key={article.slug} article={article} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  )
}
