import React from 'react'

import Movies from '@/mocks/movies'
import Genres from '@/mocks/genres'
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

function HomeContainer() {
  return <div>
    <FeaturedMovie movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0, 5)}/>
    <MoviesSection 
      title='Popular Films' 
      movies={Movies.results.slice(0, 5)}
    />
    <MoviesSection 
      title='Your Favorites' 
      movies={Movies.results.slice(7, 13)}
    />
  </div>
}

export default HomeContainer