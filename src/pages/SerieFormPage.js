import React from 'react';

import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Text, TextInput, Picker, Slider, Button } from 'react-native';
import FormRow from '../components/FormRow';

import { connect } from 'react-redux';
import { setField, saveSerie } from '../store/actions';

const SerieFormPage = ({ serieForm, setField, saveSerie }) => (
    <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView style={styles.container}>
            <FormRow first>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    value={serieForm.title}
                    onChangeText={value => setField('title', value)}
                />
            </FormRow>
            <FormRow>
                <TextInput
                    style={styles.input}
                    placeholder="URL da imagem"
                    value={serieForm.img}
                    onChangeText={value => setField('img', value)}
                />
            </FormRow>
            <FormRow>
                <Picker
                    selectedValue={serieForm.gender}
                    onValueChange={itemValue => setField('gender', itemValue)}>
                    <Picker.Item label="Policial" value="police" />
                    <Picker.Item label="Comédia" value="comedy" />
                    <Picker.Item label="Terror" value="horror" />
                </Picker>
            </FormRow>
            <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider
                    selectedValue={serieForm.rate}
                    onValueChange={value => setField('rate', value)}
                    minimumValue={0}
                    maximumValue={100}
                    step={5}
                />
            </FormRow>
            <FormRow>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    value={serieForm.description}
                    onChangeText={value => setField('description', value)}
                    numberOfLines={5}
                    multiline
                />
            </FormRow>
            <Button
                title="Salvar"
                onPress={() => saveSerie(serieForm)}
            />
        </ScrollView>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    }
});

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);