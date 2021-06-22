import React from 'react'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Image, StyleSheet, View } from 'react-native'
import { Layout, Text, Divider } from '@ui-kitten/components'

const DrawerContent = (props) => {
    return (
        <Layout style={styles.conatiner}>
            <View style={styles.profileBlock}>
                <Image style={styles.image} source={require('./images/ava.png')} />
                <Text category='h3'>{props.lang === 'en' ? 'Pavel Evseev' : 'Павел Евсеев'}</Text>
            </View>
            <Divider />
            <View style={styles.drawerItemsBlock}>
                <DrawerContentScrollView>
                    <DrawerItem
                        label={() => <Text>{props.lang === 'en' ? 'Home' : 'Дом'}</Text>}
                        onPress={() => props.navigation.navigate('Home', { lang: props.lang, setLang: props.setLang })}
                    />
                    <DrawerItem
                        label={() => <Text>{props.lang === 'en' ? 'About' : 'Обо Мне'}</Text>}
                        onPress={() => props.navigation.navigate('About', { lang: props.lang, setLang: props.setLang })}
                    />
                    <DrawerItem
                        label={() => <Text>{props.lang === 'en' ? 'Portfolio' : 'Портфолио'}</Text>}
                        onPress={() => props.navigation.navigate('Portfolio', { lang: props.lang, setLang: props.setLang })}
                    />
                    <DrawerItem
                        label={() => <Text>{props.lang === 'en' ? 'Contacts' : 'Контакты'}</Text>}
                        onPress={() => props.navigation.navigate('Contacts', { lang: props.lang, setLang: props.setLang })}
                    />
                    <DrawerItem
                        label={() => <Text>{props.lang === 'en' ? 'Settings' : 'Настройки'}</Text>}
                        onPress={() => props.navigation.navigate('Settings', { setTheme: props.setTheme, lang: props.lang, setLang: props.setLang })}
                    />
                </DrawerContentScrollView>
            </View>
            <Divider />
            <View style={styles.versionBlock}>
                <Text>version: 1.0.0</Text>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    profileBlock: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 20
    },
    drawerItemsBlock: {
        flex: 5
    },
    versionBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DrawerContent