import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../constants/colors';
import ButtonContainer from '../components/ButtonContainer';
import MusicControlContainer from '../components/MusicControlContainer';

const MusicAppScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/235.1.jpg')} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 27, color: colors.text, fontWeight: 'bold' }}>Fancy You</Text>
                <Text style={{ fontSize: 20, color: colors.text, marginTop: 10 }}>Twice</Text>
            </View>
            <View>
                <Slider
                    style={styles.sliderContainer}
                    value={10}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor='white'
                    minimumTrackTintColor='#ffff24'
                    maximumTrackTintColor='white'
                >
                </Slider>
            </View>
            <View style={styles.progessLabelContainer}>
                <Text style={styles.progressLabel}>0:00</Text>
                <Text style={styles.progressLabel}>3:55</Text>
            </View>
            <MusicControlContainer/>
            <ButtonContainer/>
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
        // shadowColor:'#ffff24',
        // shadowOffset:{width:0,height:1},
        // shadowOpacity:0.5,
        // shadowRadius:10,
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
        color:colors.text,
    }
});
export default MusicAppScreen;
