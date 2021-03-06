import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar';
import CityInformation from './Components/CityInformation';
import SearchHistory from './Components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row justify-content-center'>
          <div className='col-12'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
