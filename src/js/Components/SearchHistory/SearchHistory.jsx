import React from 'react';

export class SearchHistory extends React.Component {

  render() {
  return (
    <div className='card border-info mb-3'>
    <div className='card-header text-white bg-info'>Search History</div>
    <div className='card'>
      <div>
        <div className="row">
          <div className="col-9 px-4 pt-3">Tokyo</div>
          <div className="col-3 pt-3">
            <div className="row float-left">04/28/16</div>
          </div>
        </div>
        <div className="row">
          <div className="col-9"></div>
          <div className="col-3">
            <div className="row float-left">19:04:46</div>
          </div>
        </div>
        <hr></hr>
      </div>
      <div>
        <div className="row">
          <div className="col-9 px-4 pt-3">Tokyo</div>
          <div className="col-3 pt-3">
            <div className="row float-left">04/28/16</div>
          </div>
        </div>
        <div className="row">
          <div className="col-9"></div>
          <div className="col-3">
            <div className="row float-left">19:04:46</div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  </div>
  );
 }
}

export default SearchHistory;