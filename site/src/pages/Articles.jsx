import { useMemo } from 'react'
import { ARTICLES } from '../data/articles'
import { getArticleArtwork, getArticleTheme } from '../utils/articleAssets'

function SectionContent({ section }) {
  return (
    <div className="space-y-3">
      {section.heading && <h3 className="text-2xl font-black text-gray-900">{section.heading}</h3>}
      {section.paragraphs?.map((paragraph, idx) => (
        <p key={`p-${idx}`} className="text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
      {section.listTitle && <p className="text-sm font-semibold text-gray-600">{section.listTitle}</p>}
      {section.listItems && (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {section.listItems.map((item, idx) => (
            <li key={`li-${idx}`}>{item}</li>
          ))}
        </ul>
      )}
      {section.codeBlock && (
        <pre className="bg-gray-900 text-gray-100 rounded-2xl p-4 text-sm overflow-auto">
          {section.codeBlock.join('\n')}
        </pre>
      )}
      {section.subSections?.map((subSection, idx) => (
        <div key={`sub-${idx}`} className="border-l-4 border-pokemon-primary/40 pl-4 space-y-2">
          {subSection.subheading && <h4 className="text-lg font-semibold text-pokemon-primary">{subSection.subheading}</h4>}
          {subSection.paragraphs?.map((paragraph, sIdx) => (
            <p key={`sub-p-${sIdx}`} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {subSection.listItems && (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {subSection.listItems.map((item, sIdx) => (
                <li key={`sub-li-${sIdx}`}>{item}</li>
              ))}
            </ul>
          )}
          {subSection.codeBlock && (
            <pre className="bg-gray-900 text-gray-100 rounded-2xl p-3 text-sm overflow-auto">
              {subSection.codeBlock.join('\n')}
            </pre>
          )}
        </div>
      ))}
    </div>
  )
}

function ArticleDetail({ article }) {
  const artwork = getArticleArtwork(article.slug)
  const theme = getArticleTheme(article.category)

  return (
    <article className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 overflow-hidden">
      <div className="relative h-80 w-full">
        <img src={artwork.hero} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">{article.category}</p>
          <h1 className="text-4xl font-black">{article.title}</h1>
          <p className="text-sm text-white/80">{article.author} • {article.date} • {article.readingTime}</p>
        </div>
      </div>

      <div className="p-8 space-y-10">
        <p className="text-gray-700 text-lg leading-relaxed">{article.description}</p>

        <div className="grid md:grid-cols-3 gap-4">
          {['sections', 'rankings', 'keyPoints'].map((metric) => (
            <div key={metric} className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{metric === 'sections' ? 'Chapitres' : metric === 'rankings' ? 'Classements' : 'Points clés'}</p>
              <p className="text-3xl font-black" style={{ color: theme.primary }}>
                {metric === 'sections' ? article.sections?.length || 0 : metric === 'rankings' ? (article.rankings?.length || 0) : (article.keyPoints?.length || 0)}
              </p>
            </div>
          ))}
        </div>

        {artwork.gallery?.length > 0 && (
          <div>
            <h3 className="text-2xl font-black mb-3" style={{ color: theme.primary }}>Moments illustrés</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {artwork.gallery.map((image, idx) => (
                <div key={`gallery-${idx}`} className="rounded-2xl overflow-hidden shadow-lg border border-white/60">
                  <img src={image} alt={`capture-${idx}`} className="w-full h-40 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {article.rankings && (
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 space-y-3">
            <h3 className="text-2xl font-black" style={{ color: theme.primary }}>Classement</h3>
            <ol className="space-y-2">
              {article.rankings.map((entry, idx) => (
                <li key={`${article.slug}-rank-${entry.title}`} className="flex items-start gap-3">
                  <span className="text-xl font-black" style={{ color: theme.secondary }}>{idx + 1}.</span>
                  <div>
                    <p className="font-semibold text-gray-900">{entry.title}</p>
                    <p className="text-gray-600 text-sm">{entry.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {article.sections?.length > 0 && (
          <div>
            <h3 className="text-2xl font-black mb-6" style={{ color: theme.primary }}>Chronique détaillée</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent"></div>
              <div className="space-y-10">
                {article.sections.map((section, index) => (
                  <div key={`${article.slug}-${section.heading}-${index}`} className="relative pl-16">
                    <div
                      className="absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white font-black"
                      style={{ background: `linear-gradient(140deg, ${theme.primary}, ${theme.secondary})` }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                      <SectionContent section={section} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {article.keyPoints && (
          <div className="bg-pokemon-primary/5 border border-pokemon-primary/20 rounded-3xl p-6">
            <h3 className="text-2xl font-black mb-3" style={{ color: theme.primary }}>Points clés</h3>
            <div className="space-y-2">
              {article.keyPoints.map((point, idx) => (
                <div key={`${article.slug}-kp-${idx}`} className="flex items-start gap-3">
                  <span className="text-pokemon-primary font-extrabold">✔</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {article.resources && (
          <div className="flex flex-wrap gap-3">
            {article.resources.map((resource) => (
              <a
                key={`${article.slug}-${resource.label}`}
                href={resource.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow"
                style={{ background: `linear-gradient(120deg, ${theme.primary}, ${theme.secondary})` }}
              >
                {resource.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function ArticleDetailPage({ slug, onBack }) {
  const article = useMemo(() => ARTICLES.find((item) => item.slug === slug) ?? ARTICLES[0], [slug])
  const heroArtwork = getArticleArtwork(article?.slug)

  if (!article) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-lg text-gray-600">Article introuvable.</p>
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-pokemon-primary text-white font-semibold"
          >
            Retour à la liste
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: 'radial-gradient(circle at top, #050816 0%, #0f172a 50%, #111827 100%)' }}>
      <div className="absolute inset-0 opacity-20">
        <img src={heroArtwork.hero} alt="fond Pokémon" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="container mx-auto px-4 relative z-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Archives du réseau de Lognes</p>
            <h1 className="text-4xl font-black">{article.title}</h1>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/15 border border-white/40 text-white font-semibold hover:bg-white/25 transition"
          >
            ← Retour aux articles
          </button>
        </div>

        <ArticleDetail article={article} />
      </div>
    </section>
  )
}
