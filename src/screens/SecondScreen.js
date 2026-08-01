import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function SecondScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/casual_dog.png')}
                style={{ width: 200, height: 160, borderRadius: 50 }}
            />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.googleButton}>
                <Image
                    source={require('../../assets/google.png')}
                    style={styles.googleIcon}
                />
                <Text style={styles.googleText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherButton}>
                <Text style={styles.otherText}>Outras opções</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#010614',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 15,
        color: '#333',
        marginTop: 10,
        marginBottom: 20,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2cd96b',
        paddingVertical: 8,
        width: '80%', // deixa o botão ocupar 80% da largura da tela
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 15,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    googleText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    otherButton: {
        borderWidth: 1,
        borderColor: '#2cd96b',
        paddingVertical: 8,
        width: '80%', // mesma largura do botão do Google
        borderRadius: 10,
        alignItems: 'center',
    },
    otherText: {
        color: '#2cd96b',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
