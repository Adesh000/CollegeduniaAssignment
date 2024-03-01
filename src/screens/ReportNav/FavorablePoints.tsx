import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/GeneralStyles';
import {fetchData} from '../../utils/fetchData';
import {Data} from '../../types/types';

const FavorablePoints = () => {
  const [favorablePoints, setFavorablePoints] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchFavourablePointsData = async () => {
    const res = await fetchData();
    setFavorablePoints(res.report.favourablePoints);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchFavourablePointsData();
  }, [isLoading]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{favorablePoints[0]?.heading}</Text>
      <View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Name:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.name}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Date of Birth:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.date_of_birth}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Destiny Number:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.destiny_number}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Radical Number:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.radical_number}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Name Number:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.name_number}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Evil Number:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.evil_number}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite Color:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_colour}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite day:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_day}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite God:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_god}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite mantra:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_mantra}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite Metal:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_metal}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite Stone:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_stone}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Favourite Substones:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.favourite_substones}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Friendly Numbers:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.friendly_numbers}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Neutral Number:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.neutral_number}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.tableKey}>Radical ruler:</Text>
          <Text style={styles.tableValue}>
            {favorablePoints[0]?.data?.radical_ruler}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FavorablePoints;
