import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MusicAppScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/235.1.jpg')} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 27, color: 'white', fontWeight: 'bold' }}>Fancy You</Text>
                <Text style={{ fontSize: 20, color: 'white', marginTop: 10 }}>Twice</Text>
            </View>
            <View>
                <Slider
                    style={styles.sliderContainer}
                    value={10}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor='white'
                    minimumTrackTintColor='yellow'
                    maximumTrackTintColor='white'
                >
                </Slider>
            </View>
            <View style={styles.progessLabelContainer}>
                <Text style={styles.progressLabel}>0:00</Text>
                <Text style={styles.progressLabel}>3:55</Text>
            </View>
            <View style={styles.musicControlContainer}>
                <TouchableOpacity onPress={()=>{}}>
                    <AntDesign name="stepbackward" size={24} color="white" style={{marginTop:15}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <AntDesign name="playcircleo" size={50} color="yellow" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <AntDesign name="stepforward" size={24} color="white" style={{marginTop:15}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { }}>
                    <Entypo name="heart-outlined" size={24} color="white" />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="ios-repeat-sharp" size={28} color="white" style={{}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Entypo name="share-alternative" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <SimpleLineIcons name="options-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center'
    },
    imageContainer: {
        width: 200,
        height: 300,
        marginTop: 150,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    sliderContainer: {
        width: 300,
        height: 40,
        marginTop: 35,
        flexDirection: "row",
    },
    progessLabelContainer:{
        width:320,
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    progressLabel:{
        color:'white',
    },
    musicControlContainer:{
        width:'60%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:16,
        marginBottom:36,
    },
    buttonContainer: {
        width: width,
        borderTopColor: 'yellow',
        borderWidth: 1,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});
export default MusicAppScreen;
