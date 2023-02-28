import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <CustomButton buttonTitle='Logout' onPress={()=>{}}/>
    </View>
  )
}

export default HomeScreen;

const styles=StyleSheet.create({
  container:{
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})