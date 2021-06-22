import React from 'react'
import { View, StyleSheet, ScrollView, Linking } from 'react-native'
import { Button, Divider, Icon, Layout, Text } from '@ui-kitten/components';
import Header from '../../Components/Header/Header.js';

const ContactItem = (props) => {
    return (
        <View style={styles.contactItemContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    style={styles.icon}
                    fill='#fff'
                    name={props.iconName}
                />
                <Text category='h5'>{props.text}</Text>
            </View>
            <Button onPress={() => { props.onPress()}}>{props.buttonText}</Button>
        </View>
    )
}


const Contacts = (props) => {

    const lang = props.route.params.lang

    return (
        <Layout style={styles.container}>
            <Header {...props} text={lang === 'en' ? 'Contacts' : 'Контакты'} />
                <Text style={styles.title} category='h3'>{lang === 'en' ? 'My contacts' : 'Мои контакты'}</Text>
                <ScrollView>
                    <View style={styles.content}>
                        <ContactItem iconName='email-outline' onPress={() => { Linking.openURL('mailto:pavelpliyiko2000@gmail.com') }} text={lang === 'en' ? 'Email' : 'эл. почта'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='message-circle-outline' onPress={() => { Linking.openURL('https://t.me/pavel_e_fl') }} text={lang === 'en' ? 'Telegram' : 'Telegram'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='message-circle-outline' onPress={() => { Linking.openURL('https://wa.me/+79628652013') }} text={lang === 'en' ? 'WhatsApp' : 'WhatsApp'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://www.upwork.com/freelancers/~019ef91d5993b81d1d') }} text={lang === 'en' ? 'UpWork' : 'UpWork'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://www.fl.ru/users/pavelpliyiko200') }} text={lang === 'en' ? 'FL.ru' : 'FL.ru'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://freelance.ru/flpavel') }} text={lang === 'en' ? 'Freelance.ru' : 'Freelance.ru'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://freelancehunt.com/freelancer/pro100_coder1.html') }} text={lang === 'en' ? 'FreelanceHunt' : 'FreelanceHunt'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://www.freelancejob.ru/users/PavelCoder') }} text={lang === 'en' ? 'FreelanceJob' : 'FreelanceJob'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://freelance.habr.com/freelancers/pavel_coder') }} text={lang === 'en' ? 'HABR' : 'HABR'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://kwork.ru/user/pavel_coder') }} text={lang === 'en' ? 'Kwork' : 'Kwork'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                        <ContactItem iconName='browser-outline' onPress={() => { Linking.openURL('https://kwork.ru/user/pavel_coder') }} text={lang === 'en' ? 'WorkSpace' : 'WorkSpace'} buttonText={lang === 'en' ? 'Open' : 'Открыть'} />
                    </View>
                </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginVertical: 10
    },
    icon: {
        height: 32,
        width: 32,
        marginRight: 15
    },
    content: {
        marginHorizontal: 10,
        marginBottom: 15
    },
    contactItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    }
})

export default Contacts