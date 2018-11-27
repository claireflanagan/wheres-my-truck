import { connect } from 'react-redux';
import { getTrucks } from '../../selectors/trucks';
import TruckTable from '../../components/trucks/TrucksTable';

const mapStateToProps = state => ({
  trucks: getTrucks(state)
});

export default connect(mapStateToProps)(TruckTable);
