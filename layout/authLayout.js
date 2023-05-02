import {View, StyleSheet} from "react-native";

export default function AuthLayout({props, style,children}){
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
