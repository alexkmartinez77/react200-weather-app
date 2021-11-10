import React from 'react';

export class SearchItem extends React.Component {

  render() {
    const { name, timeStamp: {date, time} } = this.props.data
    const index = this.props.index;
  return (
    <div className={index % 2 == 0 ? '': 'blueFade'}>
      <div className={"row"}>
        <div className="col-md-8 col-lg-9 px-4 pt-3">{ name }</div>
        <div className="col-md-4 col-lg-3 pt-3">
          <div className="row float-left">{ date }</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-9"></div>
        <div className="col-md-4 col-lg-3">
          <div className="row float-left">{ time }</div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
 }
}

export default SearchItem;