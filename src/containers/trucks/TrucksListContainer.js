import { connect } from 'react-redux';
import { getTrucks } from '../../selectors/trucks';
import TrucksList from '../../components/trucks/TrucksList';

const mapStateToProps = state => ({
  trucks: getTrucks(state)
});

export default connect(mapStateToProps)(TrucksList);

