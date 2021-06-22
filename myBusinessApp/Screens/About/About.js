import React from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';
import Header from '../../Components/Header/Header.js';

import { windowWidth, windowHeight } from '../../Dimensions/Dimensions.js'

const About = (props) => {
    return (
        <Layout style={styles.container}>
            <Header {...props} text={props.route.params.lang === 'en' ? 'About' : 'Обо Мне'} />
            <ScrollView>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('./images/ava.jpg')} />
                    <View>
                        {props.route.params.lang === 'en' ?
                            <Text category='h5'>
                                Hello, My name is Pavel Evseev and I'm 26 years old. I'm Web and Mobile Developer with one year of experience. During this time, I've created beautiful applications for various projects, and I'm proud that most of them have become successful businesses.
                                If you need a Web or Mobile application, you can contact me to clarify all aspects of the work. One thing I'm 100% sure, working with me will not upset you!
                            </Text>
                            :
                            <Text category='h5'>
                                Здравствуйте, меня зовут Павел Евсеев и мне 26 лет. Я Web и Mobile разработчик с годичным опытом. За это время я создавал приложения для различных проектов, и я горжусь тем, что большинство из них стали успешными бизнесами.
                                Если вам нужно Web или Mobile приложение, то можете обратиться ко мне для уточнения всех аспектов работы. В одном я уверен на 100%: работа со мной не огорчит вас!
                            </Text>
                        }
                    </View>
                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginHorizontal: 10,
        marginVertical: 15
    },
    image: {
        height: windowHeight * 0.75,
        width: windowWidth * 0.95,
        marginBottom: 15
    }
})

export default About