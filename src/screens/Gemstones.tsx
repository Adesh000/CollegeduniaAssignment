import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Data} from '../types/types';
import {fetchData} from '../utils/fetchData';
import styles from '../styles/GeneralStyles';
import Gemstone from '../components/Gemstone';

const Gemstones = () => {
  const [gemstonesData, setGemstonesData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchKalsarpaData = async () => {
    const res = await fetchData();
    setGemstonesData(res.gemstones);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchKalsarpaData();
  }, [isLoading]);
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={[styles.heading, {marginLeft: 10}]}>
        {gemstonesData[0]?.heading}
      </Text>
      <View style={{marginBottom: 30}}>
        <Gemstone item={gemstonesData[0]?.data.LIFE} heading="LIFE" />
        <Gemstone item={gemstonesData[0]?.data.BENEFIC} heading="BENEFIC" />
        <Gemstone item={gemstonesData[0]?.data.LUCKY} heading="LUCKY" />
      </View>
    </ScrollView>
  );
};

export default Gemstones;
