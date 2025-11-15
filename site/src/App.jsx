import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import ArticleDetail from './pages/Articles'
import ArticlesList from './pages/ArticlesList'
import Replays from './pages/Replays'
import Trainers from './pages/Trainers'
import { ARTICLES } from './data/articles'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(null)

  const handleNavigate = (page, payload = null) => {
    setCurrentPage(page)
    if (page === 'pokemon-detail') {
      setSelectedPokemon(payload)
    } else if (page === 'article-detail') {
      setSelectedArticleSlug(payload ?? ARTICLES[0]?.slug ?? null)
    } else if (page === 'articles') {
      setSelectedArticleSlug(null)
    }
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
        {currentPage === 'articles' && <ArticlesList onNavigate={handleNavigate} />}
        {currentPage === 'article-detail' && selectedArticleSlug && (
          <ArticleDetail
            slug={selectedArticleSlug}
            onBack={() => handleNavigate('articles')}
          />
        )}
        {currentPage === 'replays' && <Replays />}
        {currentPage === 'trainers' && <Trainers />}
      </main>

      <Footer />
    </div>
  )
}
