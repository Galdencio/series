import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';

const AppContainer = createAppContainer(createStackNavigator({
    'Main': {
        screen: SeriesPage
    },
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Bem-vindo'
        }
    },

}, {
        defaultNavigationOptions: {
            title: 'Séries',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30
            }
        }
    }
));

export default AppContainer;