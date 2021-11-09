import React from 'react';
import { updateCity, getWeather } from './searchActions'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleCity = this.handleCity.bind(this)
    this.getWeatherData = this.getWeatherData.bind(this)
  }

  handleCity(e){
    const { dispatch } = this.props;
    const city = e.target.value;
    dispatch(updateCity(city));

  }

  getWeatherData(){
    const {city, dispatch} = this.props;
    dispatch(getWeather(city));
  }
  render() {
  return (
    <form>
      <div className='row form-group'>
        <div className="col input-group">
          <input
            type='text'
            className='form-control'
            onChange={(e) => this.handleCity(e)}
          />
          <button type="button" className="btn btn-outline-secondary" onClick={() => this.getWeatherData()}>Go!</button>
        </div>
      </div>
    </form>
  );
 }
}