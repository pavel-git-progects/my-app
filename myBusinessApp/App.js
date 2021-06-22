import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as eva from '@eva-design/eva';

import HomeScreen from './Screens/Home/Home.js'
import AboutScreen from './Screens/About/About.js'
import ContactsScreen from './Screens/Contacts/Contacts.js'
import PortfolioScreen from './Screens/Portfolio/Portfolio.js'
import DrawerContent from './CustomDrawer/DrawerContent.js';
import SettingsScreen from './Screens/Settings/Settings.js';

const Drawer = createDrawerNavigator();

const App = () => {

  const [theme, setTheme] = React.useState(eva.dark);
  const [lang, setLang] = React.useState('en');

  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme} >
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} setTheme={(theme) => { setTheme(theme) }} lang={lang} setLang={(lang) => { setLang(lang) }} />}>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='About' component={AboutScreen} />
          <Drawer.Screen name='Contacts' component={ContactsScreen} />
          <Drawer.Screen name='Portfolio' component={PortfolioScreen} />
          <Drawer.Screen name='Settings' component={SettingsScreen} />
        </Drawer.Navigator>
      </ApplicationProvider >
    </NavigationContainer >
  )
}

export default App