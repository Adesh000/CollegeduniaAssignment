import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import KalsarpaDosha from './DosaNav/KalsarpaDosha';
import ManglikDosha from './DosaNav/ManglikDosha';
import SadhesatiAnalysis from './DosaNav/SadhesatiAnalysis';

const TopTab = createMaterialTopTabNavigator();

const Dosha = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Kalsarpa" component={KalsarpaDosha} />
      <TopTab.Screen name="Manglik" component={ManglikDosha} />
      <TopTab.Screen name="Sadhesati" component={SadhesatiAnalysis} />
    </TopTab.Navigator>
  );
};

export default Dosha;

const styles = StyleSheet.create({});
