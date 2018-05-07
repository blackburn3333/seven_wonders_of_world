/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator}from 'react-navigation';
import home_screen from './wonder_screens/home_screen';
import wonders_menu from './wonder_screens/menu_screen';
import placeview_screen from './wonder_screens/placeview_screen';

const Navigation = StackNavigator({
    Home: {screen: home_screen},
    Menu: {screen: wonders_menu},
    Details: {screen: placeview_screen},
});

export default Navigation;