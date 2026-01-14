export const games = [
  {
    id: 'attention',
    title: 'Attention',
    year: 2026,
    tagline: 'Are you paying attention?',
    description: 'A short first-person puzzle adventure following Joe, a new employee at the Turing Institute for Communication',
    image: '/images/games/attention.png',
    platforms: ['steam', 'itch'],
    featured: true,
    steamUrl: 'https://store.steampowered.com',
    itchUrl: 'https://itch.io',
  },
];

export const getFeaturedGame = () => games.find(game => game.featured);

export const getArchiveGames = () => games.filter(game => !game.featured);

export const getGameById = (id) => games.find(game => game.id === id);
