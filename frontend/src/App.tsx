import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Meh';
import MovieList from './movie/MovieList';
import NavBar from './Navbar';
import MyPodcasts from './pages/MyPodcasts';

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <TopBanner />;
      break;
    case '/blog':
      component = <MyPodcasts />;
      break;
    case '/movieList':
      component = <MovieList />;
      break;
  }
  console.log(window.location);
  return (
    <div className="App">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
