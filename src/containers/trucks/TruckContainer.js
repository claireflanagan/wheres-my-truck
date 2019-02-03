import { connect } from 'react-redux';
import { getTruck } from '../../selectors/trucks';
import TruckDetail from '../../components/truck/TruckDetail';
import { fetchTruckPromise } from '../../actions/trucks';

const mapStateToProps = state => ({
  truck: getTruck(state)
});

const mapDispatchToProps = dispatch => ({
  getTruck(id) {
    dispatch(fetchTruckPromise(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
