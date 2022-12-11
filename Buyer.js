import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const Buyer = (props)=> {
    return(
        <View style={styles.buyerContainer}>
        <View style={styles.buyers}>
           <View style={styles.buyerInfo}>
            <Image source={props.image} style={styles.img1}/>
            <View>
            <Text style={styles.buyerName}>{props.name}</Text>
            <Text style={styles.verify}>Verified Buyer</Text>
            </View>
           </View>
           <Text style={styles.buyerReview}>{props.text}</Text>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buyerContainer:{
        display:'flex',
        alignItems:'center',
    },
    buyers:{
        width:300,
        height:240,
        backgroundColor:'#511f50',
        borderRadius:10,
        marginVertical:15,
    },
    img1:{
        borderRadius:50,
        width:50,
        height:50,
    },
    buyerInfo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:160,
        marginHorizontal:30,
        marginVertical:30
    },
    buyerName:{
        marginTop:5,
        color:'white',
        fontWeight:'600',
        marginBottom:5
    },
    verify:{
        color:'#bc6ba0',
        fontWeight:'600',
    },
    buyerReview:{
        color:'white',
        fontWeight:'600',
        display:'flex',
        alignItems:'center',
        paddingHorizontal:30,
        lineHeight:15
    }
    
    
});
export default Buyer;