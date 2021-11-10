import React from 'react';
import SearchItem from './SearchItem';

export class SearchHistory extends React.Component {

  render() {
    const searchHistory = this.props.searchHistory;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card'>
          { searchHistory.map((searchItem, index) => {
            return <SearchItem key={index} index={index} data={searchItem} />      
            })
          }
        </div>
    </div>
    );
 }
}

export default SearchHistory;