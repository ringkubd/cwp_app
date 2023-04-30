import {View, StyleSheet} from "react-native";

export default function AuthLayout({...children}){
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
