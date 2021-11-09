import React from 'react';

export class CityInformation extends React.Component {

  render() {
  return (
    <div className='card border-info mb-3'>
    <div className='card-header text-white bg-info'>City Information</div>
    <div className='card-body'>
      <h1 className='display-6 text-center'>Tokyo</h1>
      <h6 className='text-center'>Lat/Long: 35.69, 139.69</h6>
      <hr className="hLine"></hr>
      <div className='row mt-4'>
        <div className='col'><h6 className='text-center'>Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Pressure</h6></div>
        <div className='col'><h6 className='text-center'>Humidity</h6></div>
      </div>
      <div className='row'>
        <div className='col'><h6 className='text-center text-success'>65.62 F</h6></div>
        <div className='col'><h6 className='text-center text-success'>997</h6></div>
        <div className='col'><h6 className='text-center text-success'>39%</h6></div>
      </div>
      <div className='row mt-4'>
        <div className='col'><h6 className='text-center'>Lowest Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Highest Temp {`(F)`}</h6></div>
        <div className='col'><h6 className='text-center'>Wind Speed</h6></div>
      </div>
      <div className='row'>
        <div className='col'><h6 className='text-center text-success'>65.62 F</h6></div>
        <div className='col'><h6 className='text-center text-success'>997</h6></div>
        <div className='col'><h6 className='text-center text-success'>39%</h6></div>
      </div>
    </div>
  </div>
  );
 }
}

export default CityInformation;