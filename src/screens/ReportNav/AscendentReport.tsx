import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../../utils/fetchData';
import styles from '../../styles/GeneralStyles';

interface NumerologyReport {
  type: string;
  heading: string;
  data: any;
}

const AscendentReport = () => {
  const [ascendantData, setAscendantData] = useState<NumerologyReport[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchAscendantReport = async () => {
    const res = await fetchData();
    setAscendantData(res.report.ascendantReport);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchAscendantReport();
  }, [isLoading]);
  return (
    <View style={[styles.mainContainer, {paddingHorizontal: 0}]}>
      <Text style={[styles.heading, {marginHorizontal: 20}]}>
        {ascendantData[0]?.heading}
      </Text>
      <FlatList
        data={ascendantData}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={[styles.gemstoneCard, {marginHorizontal: 20}]}>
            <View style={styles.rowBetween}>
              <Text style={styles.tableKey}>Ascendent:</Text>
              <Text style={styles.tableValue}>{item.data.ascendant}</Text>
            </View>
            <View
              style={[
                styles.rowBetween,
                {alignItems: 'flex-start', marginVertical: 10},
              ]}>
              <Text style={styles.tableKey}>Report:</Text>
              <View style={{width: 240, marginLeft: 10}}>
                <Text style={styles.tableValue}>{item.data.report}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AscendentReport;
