import { connect } from 'react-redux';
import AddTruck from '../../components/truck/AddTruck';
import { updateTrucks } from '../../actions/trucks';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit(truck) {
    dispatch(updateTrucks(truck));
  } 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTruck);
