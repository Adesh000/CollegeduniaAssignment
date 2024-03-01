import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tableKey: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  tableValue: {
    fontSize: 12,
    fontWeight: '400',
  },
  gemstoneCard: {
    marginVertical: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
  },
  heading: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
