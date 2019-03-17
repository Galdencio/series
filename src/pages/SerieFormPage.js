import React, { Component } from 'react';

import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Text, TextInput, Picker, Slider, Button, ActivityIndicator, Alert } from 'react-native';
import FormRow from '../components/FormRow';

import { connect } from 'react-redux';
import { setField, saveSerie, setWholeSerie, resetForm } from '../store/actions';

class SerieFormPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        const { navigation, setWholeSerie, resetForm } = this.props;
        if (navigation.state.params && navigation.state.params.serieToEdit) {
            return setWholeSerie(navigation.state.params.serieToEdit);
        }
        return resetForm();
    }

    render() {
        const { serieForm, setField, saveSerie, navigation } = this.props;
        return (
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
                            <Picker.Item label="Policial" value="Policial" />
                            <Picker.Item label="Comédia" value="Comédia" />
                            <Picker.Item label="Terror" value="Terror" />
                            <Picker.Item label="Ficção Científica" value="Ficção Científica" />
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
                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title="Salvar"
                                onPress={async () => {
                                    this.setState({ isLoading: true });
                                    try {
                                        await saveSerie(serieForm);
                                        navigation.goBack();
                                    } catch (e) {
                                        Alert.alert('Erro!', e.message);
                                    } finally {
                                        this.setState({ isLoading: false });
                                    }
                                }} />
                    }
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

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
    saveSerie,
    setWholeSerie,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);