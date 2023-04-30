import {useMaterial3Theme} from "@pchmn/expo-material3-theme";
import {SafeAreaView, StyleSheet, useColorScheme, Appearance} from "react-native";
import {
    MD3DarkTheme,
    MD3LightTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import {DarkColors, LightColors} from "../utils/Colors";
import {useMemo} from "react";

const Layout = ({style, children}) => {
    const colorScheme = useColorScheme();
    return (
        <PaperProvider theme={colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme}>
            <SafeAreaView style={[styles.container, style]}>
                {children}
            </SafeAreaView>
        </PaperProvider>
    )
}

export default Layout;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
