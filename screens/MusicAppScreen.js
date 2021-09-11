import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const{width,height}=Dimensions.get('window');

const MusicAppScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source = {require('../assets/OIP.jpg')}/>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize:27,color:'white',fontWeight:'bold'}}>Fancy You</Text>
                <Text style={{fontSize:20,color:'white',marginTop:10}}>Twice</Text>
            </View>
            <View>
                <Slider 
                    style={styles.sliderContainer}
                    value={10}
                    minimumValue={0}
                    maximunValue={100} 
                    thumbTintColor='red'
                    minimumTrackTintolor='red'
                    minimumTrackTintolor='white'
                    >
                </Slider>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>{}}>
                    <Entypo name="heart-outlined" size={24} color="black" />
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="ios-repeat-sharp" size={28} color="black" style={{}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Entypo name="share-alternative" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <SimpleLineIcons name="options-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'gray',
        width: '100%',
        alignItems:'center'
    },
    imageContainer:{
        width:200,
        height:300,
        marginTop:150,
        marginBottom:20,
        alignItems:'center',
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    textContainer:{
        alignItems:'center',
    },
    buttonContainer: {
        width:width,
        borderTopColor: 'pink',
        borderWidth: 2,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});
export default MusicAppScreen;
