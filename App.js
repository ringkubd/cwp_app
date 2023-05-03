import { StyleSheet } from 'react-native';
import {Provider} from "react-redux";
import store from "./store";
import Layout from "./layout";
import Navigation from "./components/Navigation";


export default function App() {
    return (
        <Provider store={store}>
            <Layout>
                <Navigation />
            </Layout>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
