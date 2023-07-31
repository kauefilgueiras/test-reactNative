import { View, StyleSheet } from "react-native";
import HeaderStatus from "../HeaderStatus";
import PackageList from "../PackageList";

export default function Status() {
    return (
      <View style={styles.container}>
        <HeaderStatus/>
        <PackageList/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    separator: {
      height: 1,
      backgroundColor: '#EAEAEA',
    },
  });
  