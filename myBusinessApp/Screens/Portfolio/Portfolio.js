import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Layout, Card, Text, Button } from '@ui-kitten/components';
import Header from '../../Components/Header/Header.js';

import { windowWidth, windowHeight } from '../../Dimensions/Dimensions.js'

const CardHeader = (props) => {
    return (
        <View {...props}>
            <Text category='h5'>{props.text}</Text>
        </View>
    )
}

const CardFooter = (props) => {
    return (
        <View  {...props}>
            <View style={styles.buttonContainer}>
                <Button size='medium' style={styles.button} disabled={props?.disabled} onPress={() => { props.onPress }} status='primary'>{props.text}</Button>
            </View>
        </View>
    )
}


const Portfolio = (props) => {

    const lang = props.route.params.lang

    return (
        <Layout style={styles.container} level='4'>
            <Header {...props} text={lang === 'en' ? 'Portfolio' : 'Портфолио'} />
            <ScrollView >
                <View style={styles.content}>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'My Site' : 'Мой Сайт'} />} footer={(props) => <CardFooter {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={styles.cardContent}>
                            <Text>GGGGGG</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'My App' : 'Моё Приложение'} />} footer={(props) => <CardFooter {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={styles.cardContent}>
                            <Text>GGGGGG</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'ADA' : 'ADA'} />} footer={(props) => <CardFooter {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={styles.cardContent}>
                            <Text>GGGGGG</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'Something!' : 'Что-то новое!'} />} footer={(props) => <CardFooter disabled={true} {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={[styles.coomingSoonBlock, styles.cardContent]}>
                            <Text category='h4' status='primary'>{lang === 'en' ? 'Cooming Soon!' : 'Скоро Будет!'}</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'Something!' : 'Что-то новое!'} />} footer={(props) => <CardFooter disabled={true} {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={[styles.coomingSoonBlock, styles.cardContent]}>
                            <Text category='h4' status='primary'>{lang === 'en' ? 'Cooming Soon!' : 'Скоро Будет!'}</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} header={(props) => <CardHeader {...props} text={lang === 'en' ? 'Something!' : 'Что-то новое!'} />} footer={(props) => <CardFooter disabled={true} {...props} text={lang === 'en' ? 'View' : 'Посмотреть'} />}>
                        <View style={[styles.coomingSoonBlock, styles.cardContent]}>
                            <Text category='h4' status='primary'>{lang === 'en' ? 'Cooming Soon!' : 'Скоро Будет!'}</Text>
                        </View>
                    </Card>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 15
    },
    card: {
        width: '95%',
        marginTop: 15
    },
    cardContent: {
        minHeight: windowHeight * 0.55
    },
    coomingSoonBlock: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        alignSelf: 'flex-end',
    },
    button: {
    }
})

export default Portfolio