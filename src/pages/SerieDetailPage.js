import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Button, View } from 'react-native';

import Line from '../components/Line';
import LongText from '../components/LongText';

import { connect } from 'react-redux';
import { deleteSerie } from '../store/actions';

class SerieDetailPage extends Component {
    render() {
        const { navigation, deleteSerie } = this.props;
        const { serie } = navigation.state.params;
        return (
            <ScrollView>
                {
                    serie.img
                        ? <Image source={{ uri: serie.img }} style={styles.image} />
                        : null
                }
                <Line label="Título" content={serie.title} />
                <Line label="Gênero" content={serie.gender} />
                <Line label="Nota" content={serie.rate} />
                <LongText label="Descrição" content={serie.description} />

                <View style={styles.button}>
                    <Button
                        title="Editar"
                        onPress={() => {
                            navigation.replace('SerieForm', { serieToEdit: serie });
                        }} />
                </View>

                <View style={styles.button}>
                    <Button
                        color="#FF0004FF"
                        title="Deletar"
                        onPress={async () => {
                            const hasDeleted = await deleteSerie(serie);
                            if (hasDeleted) {
                                navigation.goBack()
                            }
                        }} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    button: {
        margin: 10
    }
});

export default connect(null, { deleteSerie })(SerieDetailPage);