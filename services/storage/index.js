import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        if (typeof value !== 'string' && !value instanceof String){
            value = JSON.stringify(value)
        }
        await AsyncStorage.setItem(`@${key}`, value)
    }catch (e){

    }
}
