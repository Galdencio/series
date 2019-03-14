import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormRow = props => {
    return (
        <View style={[styles.container, props.first ? styles.first : null, props.last ? styles.last : null]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1
    },
    first: {
        marginTop: 10
    },
    last: {
        marginBottom: 10
    }
});

export default FormRow;