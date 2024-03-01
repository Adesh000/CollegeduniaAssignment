import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Data} from '../../types/types';
import {fetchData} from '../../utils/fetchData';
import styles from '../../styles/GeneralStyles';

const SadhesatiAnalysis = (): JSX.Element => {
  const [sadhesatiData, setSadhesatiData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchSadhesatiData = async () => {
    const res = await fetchData();
    setSadhesatiData(res.dosha.sadhesatiAnalysis);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchSadhesatiData();
  }, [isLoading]);
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.heading}>{sadhesatiData[0]?.heading}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Consideration Date:</Text>
        <Text style={styles.tableValue}>
          {sadhesatiData[0]?.data.consideration_date}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Is Saturn retrograde:</Text>
        <Text style={styles.tableValue}>
          {sadhesatiData[0]?.data.is_saturn_retrograde}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Moon sign:</Text>
        <Text style={styles.tableValue}>
          {sadhesatiData[0]?.data.moon_sign}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Saturn sign:</Text>
        <Text style={styles.tableValue}>
          {sadhesatiData[0]?.data.saturn_sign}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Is undergoing sadhesati:</Text>
        <View style={{width: 170}}>
          <Text
            style={[styles.tableValue, {textAlign: 'right', marginRight: 5}]}>
            {sadhesatiData[0]?.data.is_undergoing_sadhesati}
          </Text>
        </View>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Sadhesati status:</Text>
        <Text style={styles.tableValue}>
          {sadhesatiData[0]?.data.sadhesati_status ? 'Yes' : 'No'}
        </Text>
      </View>
      <View
        style={[
          styles.rowBetween,
          {alignItems: 'flex-start', marginVertical: 10},
        ]}>
        <Text style={styles.tableKey}>What is sadhesati ?:</Text>
        <View style={{width: 170}}>
          <Text style={styles.tableValue}>
            {sadhesatiData[0]?.data['what_is_sadhesati_?']}
          </Text>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <Text style={styles.heading}>{sadhesatiData[1]?.heading}</Text>
        {sadhesatiData[1]?.data.map((item: any, index: number) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginVertical: 5,
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: '#000',
                position: 'relative',
                top: 5,
              }}></View>
            <View style={{marginHorizontal: 10}}>
              <Text>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SadhesatiAnalysis;
