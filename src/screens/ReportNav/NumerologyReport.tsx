import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/GeneralStyles';
import {fetchData} from '../../utils/fetchData';
import {Data} from '../../types/types';

const NumerologyReport = () => {
  const [numerologyData, setNumerologyData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchNumerologyReport = async () => {
    const res = await fetchData();
    setNumerologyData(res.report.numerologyReport);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchNumerologyReport();
  }, [isLoading]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={numerologyData}
        renderItem={({item, index}) => (
          <View key={index} style={{marginVertical: 10}}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text>{item.data[0]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NumerologyReport;
