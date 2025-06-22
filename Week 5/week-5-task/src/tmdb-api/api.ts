import imageFallback from './no-image.png';
import { Movie, MovieDetailsResult, MovieID, MovieListResult } from './types';

const BASE_API_URL = '//api.themoviedb.org/3/';
const BASE_IMG_API = '//image.tmdb.org/t/p/';

const API_KEY = '6ca142da9f18445499c52d9340cd8b3f';

type QueryStringParams = { [key: string]: string | number };

function generateQueryString(params: QueryStringParams = {}) {
  params = {
    api_key: API_KEY,
    ...params,
  };

  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}

function generateUrl(path: string, params = {}) {
  const query = generateQueryString(params);

  return `${BASE_API_URL}${path}?${query}`;
}

interface ApiError {
  status_message: string;
  status_code: number;
}

function throwCommonError(data: ApiError) {
  throw new Error(`${data.status_message} (error code: ${data.status_code})`);
}

async function handleApiCall(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throwCommonError(data);
  }

  return data;
}

export function getPopularMovies(page = 1): Promise<MovieListResult> {
  const url = generateUrl('discover/movie', {
    page,
    with_original_language: 'hi',
    sort_by: 'popularity.desc',
  });

  return handleApiCall(url);
}

export function getMovie(id: MovieID): Promise<MovieDetailsResult> {
  const url = generateUrl(`movie/${id}`);

  return handleApiCall(url);
}

export function getMovieRecommendations(id: MovieID): Promise<MovieListResult> {
  const url = generateUrl(`movie/${id}/recommendations`);

  return handleApiCall(url);
}

export function searchMovies(
  query: string,
  page = 1
): Promise<MovieListResult> {
  const url = generateUrl('search/movie', { query, page });

  return handleApiCall(url);
}

export function getMoviePosterImageUrl(movie: Movie) {
  if (!movie.poster_path) {
    return imageFallback;
  }

  return `${BASE_IMG_API}w500/${movie.poster_path}`;
}

export function getMovieBackdropImageUrl(movie: Movie) {
  if (!movie.backdrop_path) {
    return imageFallback;
  }

  return `${BASE_IMG_API}w500/${movie.backdrop_path}`;
}

export function getMovieReleaseYear(movie: Movie) {
  if (!movie.release_date) {
    return 'N/A';
  }

  return new Date(movie.release_date).getFullYear();
}
