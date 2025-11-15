import { REPLAYS } from '../data/replays'

function ReplaySection({ section, slug }) {
  return (
    <div className="space-y-2" key={`${slug}-${section.heading}`}>
      {section.heading && <h3 className="text-xl font-bold text-pokemon-primary">{section.heading}</h3>}
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
        <div key={`${slug}-${section.heading}-sub-${idx}`} className="pl-4 border-l-4 border-pokemon-primary/30 space-y-1">
          {subSection.subheading && <h4 className="font-semibold text-pokemon-primary">{subSection.subheading}</h4>}
          {subSection.paragraphs?.map((paragraph, sIdx) => (
            <p key={`${slug}-${subSection.subheading}-p-${sIdx}`} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {subSection.codeBlock && (
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm overflow-auto">
              {subSection.codeBlock.join('\n')}
            </pre>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Replays() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-black mb-4">Replays commentés & analyses</h1>
          <p className="text-xl text-gray-600">Toute la bibliothèque vidéo est maintenant directement intégrée aux composants React.</p>
        </header>

        <div className="space-y-12">
          {REPLAYS.map((replay) => (
            <article key={replay.slug} className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 space-y-4">
                  {replay.coverImage && (
                    <figure className="rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={replay.coverImage.src}
                        alt={replay.coverImage.alt}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                      <figcaption className="text-xs uppercase tracking-widest text-gray-500 px-4 py-2">
                        📷 {replay.coverImage.alt}
                      </figcaption>
                    </figure>
                  )}

                  <header className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400">{replay.category}</p>
                    <h2 className="text-3xl font-black text-pokemon-primary">{replay.title}</h2>
                    <p className="text-sm text-gray-500">
                      {replay.author} • {replay.date} • {replay.duration} • {replay.platform}
                    </p>
                    <p className="text-gray-700">{replay.description}</p>
                  </header>

                  {replay.timestamps?.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <h3 className="text-lg font-semibold text-pokemon-primary mb-2">Timestamps</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {replay.timestamps.map((stamp) => (
                          <li key={`${replay.slug}-${stamp.time}`}>
                            <span className="font-mono text-pokemon-primary">{stamp.time}</span> — {stamp.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {replay.sections?.map((section) => (
                    <ReplaySection key={`${replay.slug}-${section.heading}`} section={section} slug={replay.slug} />
                  ))}

                  {replay.links && (
                    <div className="text-sm font-semibold text-pokemon-primary flex flex-wrap gap-4">
                      {replay.links.map((link) => (
                        <a key={`${replay.slug}-${link.label}`} href={link.href} className="hover:underline">
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gray-900/90 flex items-center justify-center p-4">
                  <div className="w-full h-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      title={replay.title}
                      src={replay.videoUrl}
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
