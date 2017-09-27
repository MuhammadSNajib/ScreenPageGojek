import { Navigation } from 'react-native-navigation';

import Home from './screens/home';
import GoRidePage from './screens/goRidePage';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('screen.Home', () => Home);
  Navigation.registerComponent('screen.GoRidePage', () => GoRidePage);
};
