import { connect } from 'react-redux';
import { getTrucks } from '../../selectors/trucks';
import { fetchTrucksPromise } from '../../actions/trucks';
import TruckTable from '../../components/trucks/TrucksTable';

//where you pass objects
const mapStateToProps = state => ({
  trucks: getTrucks(state)
});

//where you pass functions
const mapDispatchToProps = dispatch => ({ 
  getTrucks() {
    dispatch(fetchTrucksPromise());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TruckTable);
