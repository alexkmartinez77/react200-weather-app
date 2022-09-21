import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  console.log('cityData', store.search.cityData)
  return {
    cityData: store.search.cityData,
  };
}
export default connect(mapStoreToProps)(CityInformation);