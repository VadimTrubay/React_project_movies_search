import React from 'react'
import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {lazy} from "react";


const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews/MovieReviews"));
const Navigation = lazy(() => import("../pages/Navigation/Navigation"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation/>
        <hr/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='movies' element={<MoviesPage/>}/>
          <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
            <Route path='cast' element={<MovieCast/>}/>
            <Route path='reviews' element={<MovieReviews/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
