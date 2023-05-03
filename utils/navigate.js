import { CommonActions, createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export const goBack = () => {
    if (navigationRef) {
        navigationRef.dispatch(CommonActions.goBack());
    }
};

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack
};
