export default function Footer() {
  return (
    <footer className="bg-pokemon-secondary text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pokemon-electric transition">Notre mission</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Contact</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contenu</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pokemon-electric transition">Articles</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Pokédex</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Replays</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Communauté</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pokemon-electric transition">Discord</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Twitter</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pokemon-electric transition">Confidentialité</a></li>
              <li><a href="#" className="hover:text-pokemon-electric transition">Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pokémon Family. Fan project respectant les droits d'auteur Nintendo/The Pokémon Company.</p>
        </div>
      </div>
    </footer>
  )
}
