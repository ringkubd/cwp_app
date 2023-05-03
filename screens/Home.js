import {Pressable, Text, View} from "react-native";
import AuthLayout from "../layout/authLayout";
import {Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import {useServerTypeMutation} from "../services/rtkQuery/serverApi";
import {useEffect} from "react";

export default function Home({navigation}){
    const dispatch = useDispatch();
    const [submit, result] = useServerTypeMutation();
    useEffect(() => {
        const formData = new FormData();
        formData.append("key", "N42nU3lRfA4ozmylnUfDHn9mcS0fbmB3T4meS3VX8qXAraQDdGtg7Rb1eawZccZ1VX9oco");
        formData.append("action", "list");

        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };

        fetch("https://5.189.130.79:2304/v1/typeserver", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])

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
