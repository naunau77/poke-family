import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import Articles from './pages/Articles'
import Replays from './pages/Replays'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleNavigate = (page, pokemon = null) => {
    setCurrentPage(page)
    if (pokemon) setSelectedPokemon(pokemon)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'pokedex' && <Pokedex onNavigate={handleNavigate} />}
        {currentPage === 'pokemon-detail' && selectedPokemon && (
          <PokemonDetail pokemon={selectedPokemon} onNavigate={handleNavigate} />
        )}
        {currentPage === 'articles' && <Articles />}
        {currentPage === 'replays' && <Replays />}
      </main>

      <Footer />
    </div>
  )
}
