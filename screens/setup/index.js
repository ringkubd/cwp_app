import {Text, View, StyleSheet} from "react-native";
import * as Yup from 'yup';
import {Formik} from "formik";
import {Button, HelperText, TextInput} from "react-native-paper";
import i18n from "../../localization";
import {useDispatch} from "react-redux";
import {storeData} from "../../services/storage";
export default function Setup(){
    const dispatch = useDispatch();

    const initialForm = {
        name: '',
        api_key: '',
        api_base: '',
    }
    const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(i18n.t('name_required')),
        api_key: Yup.string().required(i18n.t('api_key_required')),
        api_base: Yup.string().required(i18n.t('api_base_required')).matches(URL, "Must be a URL"),
    })

    const submitForm = (values, pageProps) => {
        storeData('server_details', values).then(() => {
            dispatch({
                type: 'server/store',
                payload: values
            })
        })
        pageProps.setSubmitting(false)
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                <Text>Setup</Text>
            </View>
            <View style={{flex: 2}}>
                <Formik
                    initialValues={initialForm}
                    onSubmit={submitForm}
                    validationSchema={validationSchema}>
                    {
                        ({handleChange, handleSubmit, handleReset, setSubmitting, errors, isSubmitting}) => (
                            <>
                                <View style={styles.row}>
                                    <TextInput
                                        mode="outlined"
                                        placeholder="Server Name"
                                        label="Name"
                                        name="name"
                                        onChangeText={handleChange('name')}
                                        style={styles.input}
                                    />
                                    <HelperText type="error" visible={errors.name}>
                                        {errors.name}
                                    </HelperText>
                                </View>
                                <View style={styles.row}>
                                    <TextInput
                                        mode="outlined"
                                        label="Base URL"
                                        name="api_base"
                                        onChangeText={handleChange('api_base')}
                                        style={styles.input}
                                    />
                                    <HelperText type="error" visible={errors.api_base}>
                                        {errors.api_base}
                                    </HelperText>
                                </View>
                                <View style={styles.row}>
                                    <TextInput
                                        mode="outlined"
                                        label="API Key"
                                        name="api_key"
                                        onChangeText={handleChange('api_key')}
                                        style={styles.input}
                                    />
                                    <HelperText type="error" visible={errors.api_key}>
                                        {errors.api_key}
                                    </HelperText>
                                </View>
                                <View style={styles.row}>
                                   <Button
                                       icon="content-save-settings"
                                       mode="contained"
                                       onPress={handleSubmit}
                                       loading={isSubmitting}
                                   >Save</Button>
                                </View>
                            </>
                        )
                    }
                </Formik>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    row: {
        flexDirection: "column",
        marginVertical: 20,
        justifyContent: "space-between",
        width: '100%'
    },
    input: { marginVertical: 5 },
});
