import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { itemDB } from "../data";

interface IItemProps {
  data: string;
  setScanned: React.Dispatch<React.SetStateAction<boolean>>;
}
const Item = ({ data, setScanned }: IItemProps) => {
  const itemData = itemDB.find((i) => data === i.ean);

  if (!itemData) {
    return (
      <View style={styles.container}>
        <Text>Item not found in DB</Text>
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{itemData.russian.toString()}</Text>
      <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "60%",
    backgroundColor: "#414141",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Item;
