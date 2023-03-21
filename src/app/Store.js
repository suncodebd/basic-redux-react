import { createStore } from 'redux';
import counterReducer from '../components/services/reducers/Reducer';

const store = createStore(counterReducer);

export default store;
