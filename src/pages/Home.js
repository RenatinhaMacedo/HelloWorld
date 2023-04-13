import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Home = ({ navigator }) => {
    return (
        <View>
            <Text>Pagina Inicial</Text>

            <Button
                title="Formaçao"
                onPress={ () => NavigationPreloadManager.navigate('Formacao')}
            />    
        </View>
    );
}
const estilos = StyleSheet.create({

});

export default Home;