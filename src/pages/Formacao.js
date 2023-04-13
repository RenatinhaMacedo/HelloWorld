import React from 'react';
import { View, Text, Button } from 'react-native';

const Formacao = () => {
    return (
        <View>
            <Text>Formacao</Text>

            <Button
            title="Voltar"
            onPress={() => NavigationPreloadManager.goBack()}
            />
        </View>
    );
}

export default Formacao;