import React from 'react';
import {Text, View, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import Buyer from './Buyer';
import Review from './Review';
const arr = ['Rated 5 Stars in Reviews','Rated 5 Stars in Report Guru','Rated 5 Stars in BestTech']

const App = () =>{
  return(
    <ScrollView style={{width:'100%'}}>
    <View style={styles.screen}>
      <ImageBackground source={require('./background.png')} style={styles.background}>
    <Text style={styles.header}>10,000+ of our users love our product.</Text>
    <Text style={styles.paragraph}>We only provide great products combined with excellent customer service. See what our 
      satisfied customers are saying about our service</Text>
      <Review text='Rated 5 Stars in Reviews'/>
      <Review text='Rated 5 Stars in Report Guru'/>
      <Review text='Rated 5 Stars in BestTech'/>

      <Buyer image={require('./image-colton.jpg')} 
      name='Colton Smith' 
      text='"We needed the same printed design as the one we had ordered a week
      prior. Not only did they find the original orderm but we also received it 
      in time. Excellent!"'
      />
      <Buyer image={require('./image-irene.jpg')} 
      name='Irene Roberts' 
      text='"Customer service is always excellent and very quick turn around. 
      Completely delighted with the simplicity ot the purchase and the speed of delivery."'
      />
      <Buyer image={require('./image-anne.jpg')} 
      name='Anne Wallace' 
      text='"Put an order with this company and can only praise them for the very high standard.
      Will definitely use them again and recommend them to everyone!"'
      />

    </ImageBackground>
    </View>
    </ScrollView>
  )

};
const styles = StyleSheet.create({
  screen:{
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    },
    header:{
      color:'#521e4d',
      fontSize:30,
      fontWeight:'600',
      display:'flex',
      textAlign:'center',
      marginHorizontal:80,
      marginTop:50,
    },
    paragraph:{
      color:'#9a8d99',
      fontWeight:'500',
      fontSize:15,
      display:'flex',
      textAlign:'center',
      marginHorizontal:30,
      marginVertical:35,
    }

});
export default App;