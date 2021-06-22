import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TopNavigation, TopNavigationAction, Text, Icon, Divider, useTheme } from '@ui-kitten/components';

const BurgerIcon = (props) => {

    const theme = useTheme(); 
    return (
        <Icon
            fill={theme['background-alternative-color-1'] === '#FFFFFF' ? '#fff' : '#000'}
            name='menu-outline'
            style={styles.icon}
        />
    )
};

const OpenDrawer = (props) => {
    return (
        <TopNavigationAction icon={BurgerIcon} onPress={() => { props.openDrawer() }} />
    )
}

const Header = (props) => {
    return (
        <View>
            <TopNavigation
                title={() => <Text category='h4'>{props.text}</Text>}
                alignment='center'
                accessoryLeft={() => <OpenDrawer openDrawer={() => { props.navigation.openDrawer() }} />}
            />
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
})

export default Header