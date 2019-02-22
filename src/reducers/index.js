import { combineReducers } from 'redux';
import auth from './auth';
import trucks from './trucks';
import maintenances from './maintenances';
import truck from './truck';

export default combineReducers({
  auth,
  trucks,
  maintenances,
  truck
});
