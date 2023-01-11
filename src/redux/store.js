import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

// Most common redux states:
// 1. Auth object user
// 2. App settings (dark/light mode, language)

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
