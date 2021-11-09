import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  return {
    cityData: store.search.cityData,
  };
}
export default connect(mapStoreToProps)(CityInformation);