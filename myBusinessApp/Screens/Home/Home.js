import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';
import Header from '../../Components/Header/Header.js';

const Home = (props) => {

    const getLang = () => {
        if (props.route.params?.lang === undefined) {
            return 'en'
        } else {
            return props.route.params?.lang
        }
    }

    return (
        <Layout style={styles.container}>
            <Header {...props} text={getLang() === 'en' ? 'Home' : 'Дом'} />
            <View style={styles.content}>
                <Image style={styles.image} source={require('./images/react-logo.png')} />
                <Text style={styles.text} category='h5'>{getLang() === 'en' ? `Hello! This Mobile App was created by` : 'Привет! Это Приложение сделано с'}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.blueText} category='h5'>React Native</Text>
                    <Text style={styles.text} category='h5'>{getLang() === 'en' ? ` and ` : ' и '}</Text>
                    <Text style={styles.blueText} category='h5'>{getLang() === 'en' ? `Pavel Evseev!` : 'Павлом Евсеевым!'}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.openSidebar} onPress={() => { props.navigation.openDrawer() }}>
                <Text>{getLang() === 'en' ? `Open sidebar to see more` : 'Откройте боковое меню'}</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 350,
        width: 350
    },
    text: {
        textAlign: 'center'
    },
    textContainer: {
        flexDirection: 'row'
    },
    blueText: {
        color: '#61DBFB',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    openSidebar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home