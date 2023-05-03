import {NavigationContainer} from "@react-navigation/native";
import Onboarding from "../screens/onboarding";
import Setup from "../screens/setup";
import Home from "../screens/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Dashboard from "../screens/dashboard";

const Stack = createStackNavigator();
export default function Navigation(){
    const dispatch = useDispatch();
    const server = useSelector(state => state.server)
    const [onboarding, setOnboarding] = useState(true);

    useEffect(() => {
        if (server && server?.api_base && server?.api_key){
            setOnboarding(false)
        }
    }, [server])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    onboarding && (
                        <Stack.Screen
                            name="onboarding"
                            component={Onboarding}
                            options={{
                                headerShown: false
                            }}
                        />
                    )
                }
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: 'Home'
                    }}
                />
                <Stack.Screen
                    name="dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: true,
                        title: 'Dashboard'
                    }}
                />
                <Stack.Screen
                    name="setup"
                    component={Setup}
                    options={{
                        headerShown: false
                    }}
                />
                {
                    !onboarding && (
                        <Stack.Screen
                            name="onboarding"
                            component={Onboarding}
                            options={{
                                headerShown: false
                            }}
                        />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
