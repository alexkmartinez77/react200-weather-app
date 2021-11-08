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
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CurrentWeather />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
