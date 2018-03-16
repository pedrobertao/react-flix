export const API_KEY = 'bbe0f0f91a47f562989ddc333de14bea';
export const API_SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR`;
export const API_CONFIG = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;
export const API_CATEGORY = [
    'https://api.themoviedb.org/3/discover/movie?api_key=bbe0f0f91a47f562989ddc333de14bea&language=pt-BR&primary_release_date.gte=2018-03-01',
    `https://api.themoviedb.org/3/genre/28/movies?api_key=${API_KEY}&language=pt-BR&page=1&sort_by=created_at.desc`,
    `https://api.themoviedb.org/3/genre/12/movies?api_key=${API_KEY}&language=pt-BR&page=1&sort_by=created_at.desc`,
    `https://api.themoviedb.org/3/genre/878/movies?api_key=${API_KEY}&language=pt-BR&page=1&sort_by=created_at.desc`,
    `https://api.themoviedb.org/3/genre/9648/movies?api_key=${API_KEY}&language=pt-BR&page=1&sort_by=created_at.desc`];

export const API_IMAGE = 'https://image.tmdb.org/t/p/'