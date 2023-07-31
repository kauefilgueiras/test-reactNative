import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
    const navigation = useNavigation();

    const handleStatusPress = () => {
        navigation.navigate('Status');
    };

    return (
        <View style={styles.headerStyle}>
            <Text style={styles.information}>Olá, Bem vindo</Text>
            <TouchableOpacity onPress={handleStatusPress}>
                <Text style={styles.buttonStatus}>Status</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
  },
  buttonStatus: {
    color: 'white',
    paddingTop: 40,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    fontSize: 17,
  }
});
