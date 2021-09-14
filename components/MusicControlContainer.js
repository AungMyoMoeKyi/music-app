import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../constants/colors';

const MusicControlContainer = () => {
    return (
        <View style={styles.musicControlContainer}>
            <TouchableOpacity onPress={() => { }}>
                <AntDesign name="stepbackward" size={24} color={colors.button} style={{ marginTop: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <AntDesign name="playcircleo" size={50} color={colors.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <AntDesign name="stepforward" size={24} color={colors.button} style={{ marginTop: 15 }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    musicControlContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 36,
    }
});

export default MusicControlContainer;