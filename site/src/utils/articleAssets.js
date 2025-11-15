export const ARTICLE_THEMES = {
  articles: { primary: '#FBD24D', secondary: '#FF9F68', badge: '📘' },
  tutoriel: { primary: '#38BDF8', secondary: '#2563EB', badge: '🎯' },
  analyse: { primary: '#C084FC', secondary: '#7C3AED', badge: '🔍' },
  compétitif: { primary: '#F472B6', secondary: '#EC4899', badge: '⚔️' },
  'compétitif': { primary: '#F472B6', secondary: '#EC4899', badge: '⚔️' },
  default: { primary: '#FACC15', secondary: '#F97316', badge: '⭐' }
}

const officialArt = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const ARTICLE_ARTWORKS = {
  'guide-debut-competitif': {
    hero: officialArt(25),
    gallery: [officialArt(6), officialArt(131), officialArt(248)]
  },
  'strategies-double-format': {
    hero: officialArt(474),
    gallery: [officialArt(196), officialArt(380), officialArt(609)]
  },
  'breeding-competitif-guide': {
    hero: officialArt(700),
    gallery: [officialArt(133), officialArt(39), officialArt(609)]
  },
  'metagame-switch-evolution': {
    hero: officialArt(1008),
    gallery: [officialArt(1009), officialArt(1010), officialArt(483)]
  },
  'top-10-pokemon-competitifs': {
    hero: officialArt(448),
    gallery: [officialArt(3), officialArt(130), officialArt(445)]
  },
  'types-faibles-strategies': {
    hero: officialArt(197),
    gallery: [officialArt(143), officialArt(134), officialArt(500)]
  },
  'dresseurs-legendes-naulynn': {
    hero: officialArt(250),
    gallery: [officialArt(249), officialArt(144), officialArt(145)]
  }
}

export const DEFAULT_ARTWORK = {
  hero: officialArt(25),
  gallery: [officialArt(6), officialArt(9), officialArt(3)]
}

export const getArticleArtwork = (slug) => ARTICLE_ARTWORKS[slug] || DEFAULT_ARTWORK

export const getArticleTheme = (category) => {
  if (!category) return ARTICLE_THEMES.default
  const key = category.toLowerCase()
  return ARTICLE_THEMES[key] || ARTICLE_THEMES.default
}
