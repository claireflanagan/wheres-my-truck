import { connect } from 'react-redux';
import { getImage } from '../../selectors/trucks';
import ImageDisplay from '../../components/truck/ImageDisplay';

const mapStateToProps = (state, props) => ({
  imageSource: getImage(state, props.match.params.id, props.match.params.imageType) //has to match with what your passing in the component
});

export default connect(mapStateToProps)(ImageDisplay);
