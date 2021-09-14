import React from 'react';
import { View, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import colors from "../constants/colors";

const { width, height } = Dimensions.get('window');

const ButtonContainer = props => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => { }}>
                <Entypo name="heart-outlined" size={24} color={colors.button} />
            </TouchableOpacity >
            <TouchableOpacity onPress={() => { }}>
                <Ionicons name="ios-repeat-sharp" size={28} color={colors.button} style={{}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Entypo name="share-alternative" size={24} color={colors.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <SimpleLineIcons name="options-vertical" size={24} color={colors.button} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: width,
        borderTopColor: '#969696',
        borderWidth: 1,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default ButtonContainer;