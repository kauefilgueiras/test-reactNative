import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HeaderStatus() {
    const navigation = useNavigation();

    const handleStatusPress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={handleStatusPress}>
                <Text style={styles.buttonStatus}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Text style={styles.information}>Status</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1d198a',
    height: '12%',
    paddingHorizontal: 20,
    paddingStart: 20,
    paddingEnd: 20,
  },
  information: {
    color: 'white',
    paddingTop: 40,
    fontSize: 16,
    marginRight: 40
  },
  buttonStatus: {
    color: 'white',
    paddingTop: 40,
    fontWeight: "bold",
    fontSize: 17,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
});
