import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://harpreetcd.github.io/reactnative.json',
    );
    console.log('Response : ', response.data);
    return response.data;
  } catch (error) {
    console.log('Error occured while fetching data : ', error);
  }
};
