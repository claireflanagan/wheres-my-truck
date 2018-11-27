import { connect } from 'react-redux';
import AddTruck from '../../components/truck/AddTruck';
import { addTruck } from '../../actions/addTruck';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit(truck) {
    dispatch(addTruck(truck));
  } 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTruck);
