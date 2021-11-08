import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SearchHistory from './SearchHistory/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SearchBar />
        <CurrentWeather />
        <SearchHistory />
      </div>
    );
  }
}
