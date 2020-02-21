import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from '../pages/Main';

const screens = {
  Main: {
    screen: Main
  }
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
