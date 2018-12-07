import { connect } from 'react-redux';
import AddTruck from '../../components/truck/AddTruck';
import { addTruckPromise } from '../../actions/trucks';
import { getTruck } from '../../services/truckApi';

const mapStateToProps = state => ({
  truck: getTruck(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(truck) {
    const action = addTruckPromise(truck);
    console.log('working addTruck!', truck);
    dispatch(action);
    return action.payload;
  } 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTruck);
