import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const Main = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.main}>
      <View>
        <Text style={styles.text}>Stack Navigation</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text1}>Let's Begin</Text>
        
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'black'

  },
  button:{
    backgroundColor:'black',
    padding:20,
    width:"50%",
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    justifyContent:'center',
    marginTop:40
  },
  text1:{
    fontWeight:'bold',
    fontSize:18,
    color:'#fff'
  }
})
export default Main;