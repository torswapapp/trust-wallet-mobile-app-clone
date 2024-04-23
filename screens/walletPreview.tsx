import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";
import { ScreenWrapper } from "../components/wrappers";

const WalletPreview = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Wallet Home</Text>
    </ScreenWrapper>
  );
};

export default WalletPreview;

const styles = StyleSheet.create({
  text: {
    color: Colors.whiteprimary600,
  },
});
