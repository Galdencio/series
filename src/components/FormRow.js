import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormRow = props => {
    return (
        <View style={styles.container}>
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
    }
});

export default FormRow;