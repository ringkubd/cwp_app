import React, {useEffect, useState} from "react";
import {Dimensions, View, StyleSheet, Image, Text} from "react-native";
import {SwiperFlatList} from "react-native-swiper-flatlist";
import {Button} from "react-native-paper";
import {MaterialIcons} from "@expo/vector-icons";
import i18n from "../localization";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../services/storage";

export default function Onboarding(props){
    const {navigation, route} = props;
    const dispatch = useDispatch();
    const server = useSelector(state => state.server)
    useEffect(() => {
        if (server.api_base !== "" && server.api_key !== ""){
            navigation.navigate("home")
        }
        console.log(server)
        getData('server_details')
            .then((d) => {
                dispatch({
                    type: 'server/store',
                    payload: JSON.parse(d)
                })
            })
    }, [server])

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View
                style={{
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                <View style={styles.container}>
                    <SwiperFlatList
                        autoplay={true}
                        autoplayDelay={5}
                        autoplayLoop
                        index={0}
                        showPagination>
                        <View style={styles.child}>
                            <View
                                style={{
                                    height: '45%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={require('../assets/onboarding/onboarding_secure.png')}
                                    style={styles.image}
                                    onError={() => <Text>{i18n.t('no_image')}</Text>}
                                />
                            </View>
                            <Text style={styles.titleText}>
                                {i18n.t('secure')}
                            </Text>
                            <Text style={styles.text}>
                                {i18n.t('secure_details')}
                            </Text>
                        </View>
                        <View style={styles.child}>
                            <View
                                style={{
                                    height: '45%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View style={{backgroundColor: 'white', padding: 40}}>
                                    <MaterialIcons
                                        name="storage"
                                        size={150}
                                        color="black"
                                    />
                                </View>
                            </View>
                            <Text style={styles.titleText}>
                                {i18n.t('storage')}
                            </Text>
                            <Text style={styles.text}>
                                {i18n.t('storage_details')}
                            </Text>
                        </View>
                    </SwiperFlatList>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        icon={({color}) => <MaterialIcons name="settings" size={24} color={color} />}
                        mode="contained"
                        style={styles.setup}
                        onPress={() => navigation.navigate('setup')}>
                        {i18n.t('setup_button')}
                    </Button>
                </View>
            </View>
        </View>
    )
}
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '75%',
        marginTop: 0,
        paddingTop: 0,
    },
    child: {
        width,
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: width * 0.04,
        textAlign: 'center',
    },
    titleText: {
        fontWeight: '800',
        fontSize: 35,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    buttonContainer: {
        height: '20%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    setup: {
        marginVertical: 10,
        width: width - 20,
        height: 50,
        paddingVertical: 0,
        justifyContent: 'center',
        borderRadius: 10,
        fontWeight: 'bold'
    },
    login: {
        marginVertical: 10,
        width: width - 20,
        borderRadius: 8,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    image: {
        height: height / 3,
        width: width / 1.5,
        backgroundColor: "rgba(240,240,240,1)"
    }
});
