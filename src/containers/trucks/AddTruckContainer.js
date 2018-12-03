import { connect } from 'react-redux';
import AddTruck from '../../components/truck/AddTruck';
import { addTruckPromise } from '../../actions/trucks';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit(truck) {
    console.log('working addTruck!');
    dispatch(addTruckPromise(truck));
  } 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTruck);
