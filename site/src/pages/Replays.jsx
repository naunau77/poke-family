import { useMemo } from 'react'
import { REPLAYS } from '../data/replays'

const toWatchUrl = (videoUrl) => {
  if (!videoUrl) return '#'
  const marker = '/embed/'
  if (videoUrl.includes(marker)) {
    const [, id] = videoUrl.split(marker)
    return `https://www.youtube.com/watch?v=${id}`
  }
  return videoUrl
}

function ReplaySection({ section, slug }) {
  return (
    <div className="space-y-3" key={`${slug}-${section.heading}`}>
      {section.heading && <h3 className="text-2xl font-black text-gray-900">{section.heading}</h3>}
      {section.paragraphs?.map((paragraph, idx) => (
        <p key={`${slug}-${section.heading}-p-${idx}`} className="text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
      {section.listItems && (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {section.listItems.map((item, idx) => (
            <li key={`${slug}-${section.heading}-li-${idx}`}>{item}</li>
          ))}
        </ul>
      )}
      {section.subSections?.map((subSection, idx) => (
        <div key={`${slug}-${section.heading}-sub-${idx}`} className="pl-4 border-l-4 border-pokemon-primary/30 space-y-2">
          {subSection.subheading && <h4 className="text-lg font-semibold text-pokemon-primary">{subSection.subheading}</h4>}
          {subSection.paragraphs?.map((paragraph, sIdx) => (
            <p key={`${slug}-${subSection.subheading}-p-${sIdx}`} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {subSection.listItems && (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {subSection.listItems.map((item, sIdx) => (
                <li key={`${slug}-${subSection.subheading}-li-${sIdx}`}>{item}</li>
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

export default function ReplayDetailPage({ slug, onBack }) {
  const replay = useMemo(() => REPLAYS.find((item) => item.slug === slug) ?? REPLAYS[0], [slug])

  if (!replay) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-lg text-gray-600">Replay introuvable.</p>
          <button onClick={onBack} className="px-6 py-3 rounded-full bg-pokemon-primary text-white font-semibold">
            Retour à la liste
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'radial-gradient(circle at top, #01040d 0%, #09132d 50%, #0f172a 100%)' }}
    >
      <div className="absolute inset-0 opacity-25">
        <img
          src={replay.coverImage?.src ?? 'https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/pokemon-masters/pokemon-masters-08.jpg'}
          alt="Fond replay"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 space-y-8 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Lognes Replay Hub</p>
            <h1 className="text-3xl font-black sm:text-4xl">{replay.title}</h1>
            <p className="text-sm text-white/80">
              {replay.author} • {replay.date} • {replay.duration} • {replay.platform}
            </p>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition"
          >
            ← Retour aux replays
          </button>
        </div>

        <article className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl border border-white/60 text-gray-900 overflow-hidden">
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
            <div className="space-y-6">
              {replay.coverImage && (
                <figure className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <img
                    src={replay.coverImage.src}
                    alt={replay.coverImage.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                    📷 {replay.coverImage.alt}
                  </figcaption>
                </figure>
              )}

              <p className="text-lg text-gray-700 leading-relaxed">{replay.description}</p>

              {replay.sections?.length > 0 && (
                <div className="space-y-8">
                  {replay.sections.map((section, idx) => (
                    <div key={`${replay.slug}-${section.heading}-${idx}`} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                      <ReplaySection section={section} slug={replay.slug} />
                    </div>
                  ))}
                </div>
              )}

              {replay.links && (
                <div className="flex flex-wrap gap-3">
                  {replay.links.map((link) => (
                    <a
                      key={`${replay.slug}-${link.label}`}
                      href={link.href}
                      className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow"
                      style={{ background: 'linear-gradient(120deg, #f97316, #fb923c)' }}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 space-y-4">
                <h3 className="text-xl font-black text-pokemon-primary">Informations clés</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 uppercase tracking-wide text-xs">Durée</p>
                    <p className="font-semibold text-gray-900">{replay.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-wide text-xs">Catégorie</p>
                    <p className="font-semibold text-gray-900">{replay.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-wide text-xs">Plateforme</p>
                    <p className="font-semibold text-gray-900">{replay.platform}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-wide text-xs">Analyse</p>
                    <p className="font-semibold text-gray-900">{replay.timestamps?.length ?? 0} timestamps</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black">
                  <iframe
                    title={replay.title}
                    src={replay.videoUrl}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
                <div className="p-4 text-center">
                  <a
                    href={toWatchUrl(replay.videoUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-gray-900 font-semibold hover:-translate-y-0.5 transition"
                  >
                    Ouvrir sur YouTube →
                  </a>
                </div>
              </div>

              {replay.timestamps?.length > 0 && (
                <div className="rounded-3xl border border-gray-100 bg-white p-6 space-y-2">
                  <h3 className="text-xl font-black text-pokemon-primary mb-2">Timestamps</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {replay.timestamps.map((stamp) => (
                      <li key={`${replay.slug}-${stamp.time}`}>
                        <span className="font-mono text-pokemon-primary">{stamp.time}</span> — {stamp.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </article>
      </div>
    </section>
  )
}
