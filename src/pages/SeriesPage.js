import React from 'react';

import { StyleSheet, View, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';

import series from '../../series.json';

const SeriesPage = (props) => (
    <View>
        <FlatList
            data={series}
            renderItem={({ item, index }) => (
                <SerieCard
                    serie={item}
                    isFirstColumn={index % 2 == 0} />
            )}
            keyExtractor={item => `list-item-${item.id}`}
            numColumns={2}
            ListHeaderComponent={props => <View style={styles.marginTop} />}
            ListFooterComponent={props => <View style={styles.marginBottom} />}
        />
    </View>
);

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    }
});

export default SeriesPage;