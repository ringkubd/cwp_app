import React from "react";
import AuthLayout from "../../layout/authLayout";
import {Pressable, Text} from "react-native";
import {Button} from "react-native-paper";

export default function Dashboard({navigation}){
    return (
        <AuthLayout>
            <Text>Dashboard</Text>
            <Pressable onPress={() => navigation.navigate('home')}>
                <Button>Home</Button>
            </Pressable>
        </AuthLayout>
    )
}
