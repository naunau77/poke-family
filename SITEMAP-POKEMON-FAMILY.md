# 🗺️ Sitemap — Pokémon Family

Plan du site complet avec descriptions de chaque section.

## 1. Pages principales

### Accueil `/`
- **Contenu** : Hero, vidéo vedette, articles récents, Pokédex preview, replays, CTA
- **Audience** : Tous les visiteurs
- **Objectifs SEO** : Brand keywords, home page generics

### À Propos `/about`
- **Contenu** : Histoire du site, mission, auteur, crédits, contact rapide
- **Audience** : Visiteurs intéressés par le contexte
- **Meta** : "À Propos - Pokémon Family"

### Contact `/contact`
- **Contenu** : Formulaire contact, emails, liens sociaux, réponse FAQ courants
- **Audience** : Entreprises, collaborateurs, fans
- **Form destinations** : Email ou Netlify Forms

---

## 2. Section Articles `/articles`

### Listing des articles `/articles`
- Filtre par tag, catégorie, date
- Pagination (12 articles par page)
- Recherche locale

### Article détail `/articles/[slug]`
- Contenu Markdown enrichi
- Galerie d'images
- Embeds vidéo YouTube
- Liens connexes
- Commentaires (Disqus optionnel)
- Partage social

**Articles exemples** :
- `/articles/guide-debut-competitif`
- `/articles/top-10-competitive-2025`
- `/articles/guide-cartes-pokemon`
- `/articles/histoire-kanto`
- `/articles/mangas-pokemon-recommandes`

---

## 3. Section Pokédex `/pokedex`

### Listing Pokédex `/pokedex`
- Grille 3–6 colonnes responsive
- Filtres : Type, génération, rareté, capacité
- Recherche full-text
- Trier par : nom, numéro, hauteur, poids, stats

### Fiche Pokémon `/pokedex/[nom-pokemon]`
- Image principale + galerie
- Données : stats, type(s), habitat, évolutions
- Histoire et anecdotes
- Movepool
- Rôles compétitifs
- Replays liés
- Articles mentionnant le Pokémon
- Lien vers cartes collectibles

**Pokémons exemples** :
- `/pokedex/pikachu`
- `/pokedex/salamanche`
- `/pokedex/alakazam`
- `/pokedex/dragonite`
- `/pokedex/charizard`

---

## 4. Section Replays `/replays`

### Listing Replays `/replays`
- Catégories : Compétitif, Doubles, Fun, Tutoriels
- Filtre par format, difficulté
- Tri : récent, plus populaire, plus commenté

### Replay détail `/replays/[slug]`
- Lecteur YouTube intégré
- Timestamps + chapitres
- Équipes avec movesets
- Analyse minute par minute
- Points clés à retenir
- Articles connexes
- Commentaires

**Replays exemples** :
- `/replays/replay-vgc-2025-stall-vs-offense`
- `/replays/pikachu-comp-sweep`
- `/replays/guide-doubles-format`

---

## 5. Section Guides `/guides`

### Listing Guides `/guides`
- Sous-catégories :
  - `/guides/competitif` — VGC, metagame, stratégie
  - `/guides/cartes` — Authentification, évaluation, entretien
  - `/guides/jeux` — Walkthroughs, astuces, quêtes
  - `/guides/mangas-anime` — Avis, recommandations, chronologies

### Guide détail `/guides/[slug]`
- Table des matières interactive
- Sections numérotées
- Images inline
- Vidéos tutorielles
- Liens externes (ressources officielles)

**Guides exemples** :
- `/guides/competitif/teambuilding-101`
- `/guides/cartes/authentification`
- `/guides/jeux/walkthrough-sword-shield`

---

## 6. Section Personnages `/characters`

### Listing personnages `/characters`
- Filtre : Héros, Rivaux, Champions, Antagonistes
- Tri : génération, apparition

### Fiche personnage `/characters/[nom]`
- Image / Art
- Bio courte
- Arcs narratifs
- Relations (Pokémons, autres persos)
- Apparitions (jeux, anime, mangas)
- Citations mémorables

**Personnages exemples** :
- `/characters/ash-ketchum`
- `/characters/misty`
- `/characters/leon`
- `/characters/giovanni`

---

## 7. Section Mangas & Anime `/media`

### Listing Media `/media`
- Sous-catégories :
  - `/media/anime` — Saisons, épisodes, critiques
  - `/media/mangas` — Séries, tomes, analyses

### Détail série anime `/media/anime/[slug]`
- Résumé par épisode
- Critiques, notes
- Cast voix
- OST / musiques thèmes
- Galerie captures

### Détail manga `/media/manga/[slug]`
- Résumé par chapitre
- Critique globale
- Auteur / Illustrateur
- Comparaison anime (s'il existe)
- Liens d'achat

---

## 8. Section Cartes à collectionner `/cards`

### Listing cartes `/cards`
- Filtre : Set, rareté, type, génération
- Recherche par nom, numéro
- Vue : grille, liste, détail

### Fiche carte `/cards/[slug]`
- Image haute résolution
- Informations : Set, édition, numéro
- Estimation de valeur (historique)
- Éditions alternatives
- Guides d'authentification
- Conseils de conservation
- Liens d'achat / échange

---

## 9. Section Blog / Actualités `/news`

### Listing actualités `/news`
- Articles récents
- Tags : sorties, événements, compétitions

### Actualité détail `/news/[slug]`
- Contenu court (200–400 mots)
- Date / auteur
- Liens externes officiels

---

## 10. Section Communauté `/community`

### Forum `/community/forum` (optionnel)
- Sous-forums : Stratégie, Collecte, Mangas, Hors-sujet
- Modération, règles claires

### Sondages `/community/polls`
- Sondages communautaires
- Résultats en temps réel

### Contributions utilisateurs `/community/user-content`
- Galerie fan art
- Stratégies partagées
- Témoignages

---

## 11. Pages supplémentaires

### FAQ `/faq`
- Questions courants groupées par catégorie
- Réponses structurées
- Interne search optimization

### Newsletter `/newsletter`
- Signup form
- Archive des anciens numéros
- Contenu exclusif

### Mentions légales `/legal`

### Conditions d'utilisation `/terms`

### Politique de confidentialité `/privacy`

### Sitemap XML `/sitemap.xml`
- Généré automatiquement depuis contenu Markdown

### Flux RSS `/feed.rss`
- Dernier 20 articles
- Dernier 10 replays

---

## Architecture des URLs

```
Logique hiérarchique :

/                          — Accueil
├── /about                 — À Propos
├── /contact               — Contact
├── /articles              — Blog
│   ├── /articles/[slug]   — Article détail
│   └── ?tag=...           — Filtre par tag
├── /pokedex               — Pokédex
│   ├── /pokedex/[name]    — Fiche Pokémon
│   └── ?type=...          — Filtre par type
├── /replays               — Replays Pokémon
│   ├── /replays/[slug]    — Replay détail
│   └── ?category=...      — Filtre par catégorie
├── /guides                — Guides
│   ├── /guides/[category] — Catégorie guide
│   └── /guides/[slug]     — Guide détail
├── /characters            — Personnages
│   └── /characters/[name] — Fiche personnage
├── /media                 — Anime & Mangas
│   ├── /media/anime/[slug]
│   └── /media/manga/[slug]
├── /cards                 — Cartes à collectionner
│   └── /cards/[slug]      — Fiche carte
├── /news                  — Actualités
│   └── /news/[slug]       — Actu détail
├── /community             — Communauté
│   ├── /community/forum
│   ├── /community/polls
│   └── /community/user-content
├── /faq                   — FAQ
├── /legal                 — Mentions légales
├── /terms                 — Conditions
├── /privacy               — Confidentialité
├── /sitemap.xml           — Sitemap XML
└── /feed.rss              — Flux RSS
```

---

## Priorités de contenu (MVP)

**Semaine 1–2** :
- ✅ Accueil prototype
- ✅ 5+ articles
- ✅ 20+ fiches Pokémon
- ✅ 3+ replays

**Semaine 3–4** :
- Guides (3+)
- Personnages (10+)
- Anime/Manga section
- Forum communauté
- Newsletter setup

**Après lancement** :
- Cartes collectibles (100+)
- Content utilisateur
- Monétisation (affiliation, Patreon)
- Multilingue FR/EN

---

**Sitemap généré** : 15 novembre 2025
