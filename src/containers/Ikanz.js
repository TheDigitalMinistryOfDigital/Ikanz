'use strict';
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CardDeckContainer from './CardDeckContainer';
import SearchContainer from './SearchContainer';

const Ikanz = StackNavigator({
    Search: { screen: SearchContainer },
    Cards: { screen: CardDeckContainer }
});

AppRegistry.registerComponent('Ikanz', () => Ikanz);

module.exports = Ikanz;