import { View, Text } from 'react-native';
import non_pressable_button from '../buttons/button';

const MainPage = () => {
    return (
        <View>
            <Text>Hi there!</Text>
            {non_pressable_button("Program")}
        </View>
    );
}

export default MainPage;