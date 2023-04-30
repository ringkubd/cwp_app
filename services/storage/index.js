import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        if (typeof value !== 'string' && !value instanceof String){
            value = JSON.stringify(value)
        }
        if (typeof value === 'object'){
            value = JSON.stringify(value)
        }
        await AsyncStorage.setItem(`@${key}`, value)
    }catch (e){

    }
}

export const getData = async (key) => {
    return await AsyncStorage.getItem(`@${key}`);
}
