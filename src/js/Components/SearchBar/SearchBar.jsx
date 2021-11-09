import React from 'react';
import { updateCity } from './searchActions'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleCity = this.handleCity.bind(this)
  }

  handleCity(e){
    const { dispatch } = this.props;
    const city = e.target.value;
    dispatch(updateCity(city));

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
          <button type="button" className="btn btn-outline-secondary">Go!</button>
        </div>
      </div>
    </form>
  );
 }
}