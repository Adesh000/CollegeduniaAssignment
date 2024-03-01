import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/GeneralStyles';
import {DataTable} from 'react-native-paper';
import axios from 'axios';
import {fetchData} from '../utils/fetchData';

interface HousecupsAndSandhi {
  house: number;
  degree: string;
  sign: string;
  sign_lord: string;
  start_lord: string;
  sub_lord: string;
}

const HousecupsAndSandhi = () => {
  const [tableData, setTableData] = useState<HousecupsAndSandhi[]>([]);
  const fetchHCSData = async () => {
    const res = await fetchData();
    console.log('Data : ', res.houseCuspsAndSandhi[0].data);
    setTableData(res.houseCuspsAndSandhi[0].data);
  };
  useEffect(() => {
    fetchHCSData();
  }, []);

  return (
    <ScrollView style={[styles.mainContainer, {paddingBottom: 30}]}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>house</DataTable.Title>
          <DataTable.Title>degree</DataTable.Title>
          <DataTable.Title>sign</DataTable.Title>
          <DataTable.Title>sign_lord</DataTable.Title>
          <DataTable.Title>start_lord</DataTable.Title>
          <DataTable.Title>sub_lord</DataTable.Title>
        </DataTable.Header>
        {tableData.map(item => (
          <DataTable.Row key={item.house}>
            <DataTable.Cell>{item.house}</DataTable.Cell>
            <DataTable.Cell>{item.degree}</DataTable.Cell>
            <DataTable.Cell>{item.sign}</DataTable.Cell>
            <DataTable.Cell>{item.sign_lord}</DataTable.Cell>
            <DataTable.Cell>{item.start_lord}</DataTable.Cell>
            <DataTable.Cell>{item.sub_lord}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default HousecupsAndSandhi;
