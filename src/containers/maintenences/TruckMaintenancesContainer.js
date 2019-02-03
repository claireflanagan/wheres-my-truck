import { connect } from 'react-redux';
import { getMaintenances } from '../../selectors/maintenances';
import MaintenanceList from '../../components/maintenance/MaintenanceList';
import { fetchMaintenancesPromise } from '../../actions/maintenances';
import { getTruck } from '../../selectors/trucks';
import { fetchTruckPromise } from '../../actions/trucks';

const mapStateToProps = (state, props) => ({
  maintenances: getMaintenances(state, props.match.params.id),
  truck: getTruck(state)
});

const mapDispatchToProps = dispatch => ({
  getMaintenances(id) {
    dispatch(fetchMaintenancesPromise(id));
    dispatch(fetchTruckPromise(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceList);
