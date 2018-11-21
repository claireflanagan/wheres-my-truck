import { combineReducers } from 'redux';
import trucks from './trucks';
import maintenances from './maintenances';
import truck from './truck';

export default combineReducers({
  trucks,
  maintenances,
  truck
});
