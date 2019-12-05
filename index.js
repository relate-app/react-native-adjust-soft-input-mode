import { NativeModules, Platform } from 'react-native';

const { AdjustSoftInputMode } = NativeModules;

export default Platform.select({
    android: {
        setAdjustPan: () => AdjustSoftInputMode.setAdjustPan(),
        setAdjustResize: () => AdjustSoftInputMode.setAdjustResize(),
    },
    default: {
        setAdjustPan: () => { },
        setAdjustResize: () => { },
    },
});
