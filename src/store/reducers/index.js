import * as userReducer from './user';
import * as snackbarReducer from './UI/snackbar';
import * as spinnerReducer from './UI/spinner';
import * as postReducer from './posts';
import * as hashtagReducer from './hashtags';

export default Object.assign(
  userReducer,
  snackbarReducer,
  spinnerReducer,
  postReducer,
  hashtagReducer,
);
