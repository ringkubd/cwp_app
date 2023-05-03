import {Pressable, Text, View} from "react-native";
import AuthLayout from "../layout/authLayout";
import {Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import {useAccountListQuery, useServerTypeMutation} from "../services/rtkQuery/serverApi";
import {useEffect} from "react";

export default function Home({navigation}){
    const dispatch = useDispatch();
    const [submit, result] = useServerTypeMutation();
    const getAccountList = useAccountListQuery();
    useEffect(() => {
        submit();
    }, [])
    console.log(result, getAccountList)

    return (
        <AuthLayout>
            <Text>Home</Text>
            <Pressable onPress={() => navigation.navigate('dashboard')}>
                <Button>Dashboard</Button>
            </Pressable>
            <Pressable onPress={() => dispatch({type:'server/remove'})}>
                <Button>Dispatch server change</Button>
            </Pressable>
        </AuthLayout>
    )
}
