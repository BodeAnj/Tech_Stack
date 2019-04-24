import {combineReducers} from 'redux'
import reducer from './LibraryReducers';
import SelectorReducer from './SelectorReducer'

export default combineReducers({
    libraries: reducer,
    selectedLibraryId: SelectorReducer
})