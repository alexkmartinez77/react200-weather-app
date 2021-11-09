import React from 'react';

export default class CityInformation extends React.Component {

  render() {
    const {name, coord:{lat, lon}, main:{temp, pressure, humidity, temp_min, temp_max}, wind:{speed} } = this.props.cityData;

  return (
    <div className='card border-info mb-3'>
    <div className='card-header text-white bg-info'>City Information</div>
    <div className='card-body'>
      <h1 className='display-6 text-center'>{name}</h1>
      <h6 className='text-center'>Lat/Long:<span className='text-success'> {`${lat}, ${lon}`}</span></h6>
      <hr></hr>
      <div className='row mt-4'>
        <div className='col'><h6 className='text-center'>Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Pressure</h6></div>
        <div className='col'><h6 className='text-center'>Humidity</h6></div>
      </div>
      <div className='row'>
        <div className='col'><h6 className='text-center text-success'>{`${temp}F`}</h6></div>
        <div className='col'><h6 className='text-center text-success'>{pressure}</h6></div>
        <div className='col'><h6 className='text-center text-success'>{`${humidity}%`}</h6></div>
      </div>
      <div className='row mt-4'>
        <div className='col'><h6 className='text-center'>Lowest Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Highest Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Wind Speed</h6></div>
      </div>
      <div className='row'>
        <div className='col'><h6 className='text-center text-success'>{`${temp_min}F`}</h6></div>
        <div className='col'><h6 className='text-center text-success'>{`${temp_max}F`}</h6></div>
        <div className='col'><h6 className='text-center text-success'>{`${speed}mph`}</h6></div>
      </div>
    </div>
  </div>
  );
 }
}