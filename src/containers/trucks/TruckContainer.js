import { connect } from 'react-redux';
import { getTruck } from '../../selectors/trucks';
import TruckDetail from '../../components/truck/TruckDetail';

const mapStateToProps = (state, props) => ({
  truck: getTruck(state, props.match.params.id)
});

export default connect(mapStateToProps)(TruckDetail);
