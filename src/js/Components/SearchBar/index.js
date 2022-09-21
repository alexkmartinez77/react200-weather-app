import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  console.log('city', store.search.city)
  return {
    city: store.search.city,
  };
}
export default connect(mapStoreToProps)(SearchBar);