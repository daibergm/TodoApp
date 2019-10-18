import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from '../../store/index';

// Components
import TabNavigator from './MainNavigationComponent';

const NavigationComponent = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
);

export default NavigationComponent;
