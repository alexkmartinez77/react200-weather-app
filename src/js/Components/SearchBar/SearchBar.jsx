import React from 'react';

export class SearchBar extends React.Component {

  render() {
  return (
    <form>
      <div className='row form-group'>
        <div className="col input-group">
          <input
            type='text'
            className='form-control'
          />
          <button type="button" className="btn btn-outline-secondary">Go!</button>
        </div>
      </div>
    </form>
  );
 }
}

export default SearchBar;