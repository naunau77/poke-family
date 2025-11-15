// Map of Pokémon types to their colors and background colors
export const typeColors = {
  'Normal': { bg: 'bg-[#A8A878]', light: 'bg-[#A8A87820]', border: 'border-[#A8A878]' },
  'Feu': { bg: 'bg-[#F08030]', light: 'bg-[#F0803020]', border: 'border-[#F08030]' },
  'Eau': { bg: 'bg-[#6890F0]', light: 'bg-[#6890F020]', border: 'border-[#6890F0]' },
  'Plante': { bg: 'bg-[#78C850]', light: 'bg-[#78C85020]', border: 'border-[#78C850]' },
  'Électrique': { bg: 'bg-[#F8D030]', light: 'bg-[#F8D03020]', border: 'border-[#F8D030]' },
  'Glace': { bg: 'bg-[#98D8D8]', light: 'bg-[#98D8D820]', border: 'border-[#98D8D8]' },
  'Combat': { bg: 'bg-[#C03028]', light: 'bg-[#C0302820]', border: 'border-[#C03028]' },
  'Poison': { bg: 'bg-[#A040A0]', light: 'bg-[#A040A020]', border: 'border-[#A040A0]' },
  'Sol': { bg: 'bg-[#E0C068]', light: 'bg-[#E0C06820]', border: 'border-[#E0C068]' },
  'Vol': { bg: 'bg-[#A890F0]', light: 'bg-[#A890F020]', border: 'border-[#A890F0]' },
  'Psy': { bg: 'bg-[#F85888]', light: 'bg-[#F8588820]', border: 'border-[#F85888]' },
  'Insecte': { bg: 'bg-[#A8B820]', light: 'bg-[#A8B82020]', border: 'border-[#A8B820]' },
  'Roche': { bg: 'bg-[#B8A038]', light: 'bg-[#B8A03820]', border: 'border-[#B8A038]' },
  'Spectre': { bg: 'bg-[#705898]', light: 'bg-[#70589820]', border: 'border-[#705898]' },
  'Dragon': { bg: 'bg-[#7038F8]', light: 'bg-[#7038F820]', border: 'border-[#7038F8]' },
  'Ténèbres': { bg: 'bg-[#705848]', light: 'bg-[#70584820]', border: 'border-[#705848]' },
  'Acier': { bg: 'bg-[#B8B8D0]', light: 'bg-[#B8B8D020]', border: 'border-[#B8B8D0]' },
  'Fée': { bg: 'bg-[#EE99AC]', light: 'bg-[#EE99AC20]', border: 'border-[#EE99AC]' },
}

// Get the primary type color
export const getTypeColor = (type) => {
  const primaryType = type.split('/')[0].trim()
  return typeColors[primaryType] || typeColors['Normal']
}

// Get hex color from type name for gradients
export const getTypeHexColor = (type) => {
  const colorMap = {
    'Normal': '#A8A878',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Plante': '#78C850',
    'Électrique': '#F8D030',
    'Glace': '#98D8D8',
    'Combat': '#C03028',
    'Poison': '#A040A0',
    'Sol': '#E0C068',
    'Vol': '#A890F0',
    'Psy': '#F85888',
    'Insecte': '#A8B820',
    'Roche': '#B8A038',
    'Spectre': '#705898',
    'Dragon': '#7038F8',
    'Ténèbres': '#705848',
    'Acier': '#B8B8D0',
    'Fée': '#EE99AC',
  }
  
  const primaryType = type.split('/')[0].trim()
  return colorMap[primaryType] || '#A8A878'
}
