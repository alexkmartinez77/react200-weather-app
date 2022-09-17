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
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(getWeather('San Diego'));
  }

  render() {
    const { city } = this.props.city;
  return (
    <form>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary mr-1" onClick={() => this.getWeatherData("San Diego")}>San Diego</button>
          <button type="button" className="btn btn-primary mr-1" onClick={() => this.getWeatherData("New York")}>New York</button>
          <button type="button" className="btn btn-primary mr-1" onClick={() => this.getWeatherData("Tokyo")}>Tokyo</button>
          <button type="button" className="btn btn-primary mr-1" onClick={() => this.getWeatherData("London")}>London</button>
          <button type="button" className="btn btn-primary mr-1" onClick={() => this.getWeatherData("Imperial")}>Imperial</button>
        </div>
      </div>
      <div className='row mb-3 mt-1'>
        <div className="col-md-12 input-group">
          <input
            type='text'
            className='form-control'
            placeholder={this.props.city}
            onChange={(e) => this.handleCity(e)}
          />
          <button type="button" className="btn btn-outline-secondary" onClick={() => this.getWeatherData()}>Go!</button>
        </div>
      </div>
    </form>
  );
 }
}