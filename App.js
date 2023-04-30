import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import Layout from "./layout";
import i18n from "./localization";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from "./screens/onboarding";
import Setup from "./screens/setup";


const Stack = createStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <Layout>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="onboarding"
                            component={Onboarding}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="setup"
                            component={Setup}
                            options={{
                                headerShown: false
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Layout>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
