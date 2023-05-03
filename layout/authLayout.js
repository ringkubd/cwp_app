import {View, StyleSheet, Alert, Linking} from "react-native";
import {useCallback, useEffect, useState} from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";

export default function AuthLayout({props, style,children}){
    const navigation = useNavigation();
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth);
    const server = useSelector(state => state.server);

    useEffect(() => {
        if (!server?.api_base || !server?.api_key){
            navigation.navigate('onboarding')
        }
    }, [server])

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });
    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics){
            return Alert.alert(
                'Biometric record not found',
                'Please verify your identity with your password',
                [
                    {
                        text: 'Settings',
                        onPress: () => Linking.sendIntent("android.settings.SECURITY_SETTINGS")
                    }
                ]
            );
        }else{
            dispatch({
                type: 'auth/loading'
            })
            biometricLogin();
        }
    }
    useEffect(() => {
        if (isBiometricSupported && !loggedIn.login){
            handleBiometricAuth()
        }
    }, [isBiometricSupported, loggedIn.login])

    const biometricLogin = useCallback(async () => {
        try {
            const result = await LocalAuthentication.authenticateAsync();
            if (result.success){
                dispatch({
                    type: 'auth/success'
                })
            }
        } catch (error) {
            Alert.alert("Incompatible!!","This device doesn't support biometric authentication process.")
        }

    }, []);

    return (
        <View style={[style,styles.container]} {...props}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
