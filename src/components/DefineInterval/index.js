import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";

const DefineInterval = () => {
  const data = [
    { key: "10s" },
    { key: "5s" },
    { key: "3s" },
    { key: "1s" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item.key;

    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(isSelected ? null : item.key)}
        style={[styles.item, isSelected && styles.selectedItem]}
      >
        <Text style={[styles.text, isSelected && styles.selectedText]}>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textService}>Intervalo de comunicação</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          horizontal={true}
          scrollEnabled={false}
        />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 10,
    marginEnd: 20,
  },
  textService: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  item: {
    borderWidth: 1,
    padding: 20,
    borderColor: "#bdcaff",
    borderRadius: 5,
    justifyContent: "space-between",
    marginStart: 20,
    marginEnd: 15
  },
  text: {
    color: "#808a88",
    fontSize: 16,
  },
  selectedItem: {
    borderColor: "#008000",
    backgroundColor: "#ebf5f3",
  },
  selectedText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default DefineInterval;
