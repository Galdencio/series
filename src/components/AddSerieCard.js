import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const SerieCard = ({ serie, isFirstColumn, onNavigate }) => (
    <TouchableOpacity
        onPress={onNavigate}
        style={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]}>
        <View style={styles.card}>
            <Image
                source={require('../../resources/plus.png')}
                style={styles.image} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
        borderWidth: 1,
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default SerieCard;