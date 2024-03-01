import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/GeneralStyles';

interface Gemstone {
  item: any;
  heading: string;
}

const Gemstone = ({item, heading}: Gemstone): JSX.Element => {
  return (
    <View style={styles.gemstoneCard}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Name:</Text>
        <Text style={styles.tableValue}>{item?.name}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Gem Key:</Text>
        <Text style={styles.tableValue}>{item?.gem_key}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Semi Gem:</Text>
        <Text style={styles.tableValue}>{item?.semi_gem}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Wear Finger:</Text>
        <Text style={styles.tableValue}>{item?.wear_finger}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Weight caret:</Text>
        <Text style={styles.tableValue}>{item?.weight_caret}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Wear metal:</Text>
        <Text style={styles.tableValue}>{item?.wear_metal}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Wear day:</Text>
        <Text style={styles.tableValue}>{item?.wear_day}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Gem deity:</Text>
        <Text style={styles.tableValue}>{item?.gem_deity}</Text>
      </View>
    </View>
  );
};

export default Gemstone;
