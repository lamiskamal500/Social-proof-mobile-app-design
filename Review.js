import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useState } from 'react';

const Review = (props)=> {
    return(
        <View style={styles.ratingContainer}>
        <View style={styles.rating}>
            <View style={styles.stars}>
           <Image source={require('./favourite.png')} style={styles.star}/>
           <Image source={require('./favourite.png')} style={styles.star}/>
           <Image source={require('./favourite.png')} style={styles.star}/>
           <Image source={require('./favourite.png')} style={styles.star}/>
           <Image source={require('./favourite.png')} style={styles.star}/>
           </View>
           <Text style={styles.rateText}>{props.text}</Text>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    ratingContainer:{
        display:'flex',
        alignItems:'center',
    },
    rating:{
        width:300,
        height:90,
        backgroundColor:'#f7f2f8',
        borderRadius:10,
        marginVertical:15,
        alignItems:'center'
    },
    rateText:{
        color:'#521e4d',
        fontWeight:'800',
        display:'flex',
        textAlign:'center'
    },
    stars:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:130,
        marginVertical:15
    },
    star:{
        width:20,
        height:20
    }
});
export default Review;