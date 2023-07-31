import { Image, View, Text, StyleSheet } from "react-native";
import compass from '../../assets/compass.png'



export default function StatusGPS () {
    return(
        <View style={styles.container}>
            <Image source={compass} style={styles.imageCompass} />
            <View>
                <Text style={styles.details}>My GPS - Tracking</Text>
                <Text style={styles.status}>Online</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCompass: {
    width: 80,
    height: 80,
    marginTop: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  details: {
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "center",
    textAlign: "center",
    marginTop: 20
  },
  status: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'green',
  },
})
