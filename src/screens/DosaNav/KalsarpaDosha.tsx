import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../../utils/fetchData';
import {Data} from '../../types/types';
import styles from '../../styles/GeneralStyles';

const KalsarpaDosha = (): JSX.Element => {
  const [KalsarpaData, setKalsarpaData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchKalsarpaData = async () => {
    const res = await fetchData();
    setKalsarpaData(res.dosha.kalsarpaDosha);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchKalsarpaData();
  }, [isLoading]);
  console.log('One lIn=', KalsarpaData[0]?.data);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>{KalsarpaData[0]?.heading}</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>Data Present:</Text>
        <Text style={styles.tableValue}>
          {KalsarpaData[0]?.data.present ? KalsarpaData[0]?.data.present : 'No'}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.tableKey}>One Line:</Text>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.tableValue}>
            {KalsarpaData[0]?.data?.one_line}
          </Text>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.heading}>{KalsarpaData[1]?.heading}</Text>
        {KalsarpaData[1]?.data.map((item: any, index: number) => (
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
    </View>
  );
};

export default KalsarpaDosha;
