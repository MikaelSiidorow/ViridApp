import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { itemDB } from "../data";

interface IItemProps {
  data: string;
  setScanned: React.Dispatch<React.SetStateAction<boolean>>;
}
const Item = ({ data, setScanned }: IItemProps) => {
  const itemData = itemDB.find((i) => data === i.ean);

  const styles = StyleSheet.create({
    textSmall: {
      fontSize: 30,
      color: "white",
      textShadowColor: "black",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 1,
    },
    text: {
      fontSize: 40,
      color: "white",
      textShadowColor: "black",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 1,
    },
    container: {
      height: "60%",
      width: "90%",
      margin: "auto",
      display: "flex",
      borderRadius: 30,
      backgroundColor: itemData
        ? itemData.level.toString() === "negative"
          ? "rgba(255,0,0,0.5)"
          : itemData.level.toString() === "neutral"
          ? "rgba(255,255,0,0.5)"
          : "rgba(0,255,0,0.5)"
        : "rgba(0,0,255,0.5)",
    },
    scrollContainer: {
      width: "100%",
      height: "100%",
      padding: 20,
      overflow: "scroll",
    },
    buttonContainer: {
      width: "100%",
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "darkslategrey",
      padding: 10,
      paddingBottom: 20,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    listRow: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginBottom: 8,
    },
    listRowLeft: { width: 40, display: "flex" },
    listRowRight: { paddingRight: 25 },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {itemData ? (
          <>
            <Text style={styles.text}>{itemData.name}</Text>
            {itemData.information.map((data, i) => (
              <View style={styles.listRow} key={"key" + i}>
                <View style={styles.listRowLeft}>
                  <Text key={data} style={styles.textSmall}>
                    {data.split(" ")[0]}
                  </Text>
                </View>
                <View style={styles.listRowRight}>
                  <Text key={data} style={styles.textSmall}>
                    {data.split(" ").slice(1).join(" ")}
                  </Text>
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text style={styles.text}>Item not found</Text>
        )}
        <View style={styles.listRow}>
          <Text> </Text>
        </View>
        <View style={styles.listRow}>
          <Text> </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.text}>Tap to scan again!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Item;
