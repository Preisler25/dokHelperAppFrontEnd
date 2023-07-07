import { View, Text } from 'react-native';
import styles from './button.sytle'

const non_pressable_button = (title) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
}

export default non_pressable_button;