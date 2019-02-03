import { connect } from 'react-redux';
import { getTrucks } from '../../selectors/trucks';
import { fetchTrucksPromise } from '../../actions/trucks';
import TrucksList from '../../components/trucks/TrucksList';

const mapStateToProps = state => ({
  trucks: getTrucks(state)
});

const mapDispatchToProps = dispatch => ({
  getTrucks() {
    dispatch(fetchTrucksPromise());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrucksList);

