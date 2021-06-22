import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Layout, Text, Toggle, IndexPath, Select, SelectItem, Divider } from '@ui-kitten/components';
import Header from '../../Components/Header/Header.js';
import * as eva from '@eva-design/eva';

const Settings = (props) => {
    const useToggleState = (initialState = false, setTheme) => {
        const [checked, setChecked] = React.useState(initialState);

        const onCheckedChange = (isChecked) => {
            setChecked(isChecked);
        };

        setTheme(checked ? eva.dark : eva.light)

        return { checked, onChange: onCheckedChange };
    };

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    const themeToggle = useToggleState(true, props.route.params.setTheme);

    const onSelect = (index) => {
        switch (index.row) {
            case 0:
                props.route.params.setLang('en')
                break
            case 1:
                props.route.params.setLang('ru')
                break
        }
        setSelectedIndex(index)
    }

    return (
        <Layout style={styles.container}>
            <Header {...props} text={selectedIndex.row === 0 ? 'Settings' : 'Настройки'} />
            <View style={styles.content}>
                <View style={styles.optionContainer}>
                    <Text category='h4'>{selectedIndex.row === 0 ? 'Dark Theme ' : 'Темная Тема'}</Text>
                    <Toggle
                        {...themeToggle}
                    />
                </View >
                <View style={[styles.optionContainer, { marginTop: 20 }]}>
                    <Text style={{ flex: 1 }} category='h4'>{selectedIndex.row === 0 ? 'Language ' : 'Язык'}</Text>
                    <Select
                        value={selectedIndex.row === 0 ? 'English' : 'Русский'}
                        style={{ flex: 1 }}
                        selectedIndex={selectedIndex}
                        onSelect={index => onSelect(index)}>
                        <SelectItem title='English' />
                        <SelectItem title='Русский' />
                    </Select>
                </View>
            </View >
            <Divider />
            <View style={styles.versionBlock}>
                <Text>version: 1.0.0</Text>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 9,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    versionBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Settings