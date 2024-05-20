import {StatusBar} from 'expo-status-bar';
import {Text, useColorScheme, View} from 'react-native';
import tw, {useDeviceContext} from 'twrnc'

export default function App() {
    useDeviceContext(tw);
    const scheme = useColorScheme()

    return (
        <>
            <StatusBar style="auto"/>
            <View
                style={tw.style('flex-1 items-center justify-center', 'bg-white dark:bg-black')}>
                <Text style={tw.style(['text-black dark:text-white'])}>{scheme}</Text>
            </View>
        </>
    );

}
