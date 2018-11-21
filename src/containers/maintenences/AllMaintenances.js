import { connect } from 'react-redux';
import { getMaintenances } from '../../selectors/maintenances';
import MaintenanceList from '../../components/maintenance/MaintenanceList';

const mapStateToProps = (state, props) => ({
  maintenances: getMaintenances(state, props.match.params.id)
});

export default connect(mapStateToProps)(MaintenanceList);
