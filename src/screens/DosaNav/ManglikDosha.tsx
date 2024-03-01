import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../../utils/fetchData';
import {Data} from '../../types/types';
import styles from '../../styles/GeneralStyles';

const ManglikDosha = () => {
  const [manglikData, setManglikData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchManglikDoshaData = async () => {
    const res = await fetchData();
    setManglikData(res.dosha.manglikDosha);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchManglikDoshaData();
  }, [isLoading]);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{marginBottom: 20}}>
        <View>
          <Text style={styles.heading}>{manglikData[0]?.heading}</Text>
          <View
            style={[
              styles.rowBetween,
              {alignItems: 'flex-start', marginVertical: 5},
            ]}>
            <Text style={styles.tableKey}>Manglik Present Rule:</Text>
            <View style={{width: 170}}>
              <Text style={{color: '#000'}}>Based on aspect</Text>
              {manglikData[0]?.data.manglik_present_rule.based_on_aspect.map(
                (item: any, index: number) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginVertical: 3,
                    }}>
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#000',
                        position: 'relative',
                        top: 5,
                        marginRight: 3,
                      }}></View>
                    <Text style={styles.tableValue}>{item}</Text>
                  </View>
                ),
              )}

              <Text style={{color: '#000'}}>Based on House</Text>
              {manglikData[0]?.data.manglik_present_rule.based_on_house.map(
                (item: any, index: number) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginVertical: 3,
                    }}>
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#000',
                        position: 'relative',
                        top: 5,
                        marginRight: 3,
                      }}></View>
                    <Text style={styles.tableValue}>{item}</Text>
                  </View>
                ),
              )}
            </View>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>Manglik Cancel Rule:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.manglik_cancel_rule}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>Is Mars manglik cancelled:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.is_mars_manglik_cancelled
                ? manglikData[0]?.data.is_mars_manglik_cancelled
                : 'No'}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>Manglik Status:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.manglik_status}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>Percentage Manglik present:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.percentage_manglik_present}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>
              Percentage manglik after cancellation:
            </Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.percentage_manglik_after_cancellation}
            </Text>
          </View>
          <View
            style={[
              styles.rowBetween,
              {alignItems: 'flex-start', marginVertical: 5},
            ]}>
            <Text style={styles.tableKey}>Manglik report:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.manglik_report}
            </Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.tableKey}>Data is present:</Text>
            <Text style={styles.tableValue}>
              {manglikData[0]?.data.is_present}
            </Text>
          </View>
          <View
            style={[
              styles.rowBetween,
              {alignItems: 'flex-start', marginVertical: 5},
            ]}>
            <Text style={styles.tableKey}>What is Manglik dosha ?:</Text>
            <View style={{width: 160}}>
              <Text style={styles.tableValue}>
                {manglikData[0]?.data['what_is_manglik_dosha_?']}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.heading}>{manglikData[1]?.heading}</Text>
        {manglikData[1]?.data.map((item: any, index: number) => (
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

export default ManglikDosha;
