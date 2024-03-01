import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FavorablePoints from './ReportNav/FavorablePoints';
import NumerologyReport from './ReportNav/NumerologyReport';
import AscendentReport from './ReportNav/AscendentReport';

const TopTab = createMaterialTopTabNavigator();

const Report = (): JSX.Element => {
  return (
    <TopTab.Navigator initialRouteName="FavourablePoints">
      <TopTab.Screen name="Favourable Points" component={FavorablePoints} />
      <TopTab.Screen name="Numerology Report" component={NumerologyReport} />
      <TopTab.Screen name="Ascendent Report" component={AscendentReport} />
    </TopTab.Navigator>
  );
};

export default Report;

const styles = StyleSheet.create({});
