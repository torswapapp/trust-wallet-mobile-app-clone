import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { InputField, SemiFullCard } from "../../components/general";
import { ScreenWrapper } from "../../components/wrappers";
import { crypto } from "../../data/homeData";

const ListOfSendScreen = () => {
  const cryptoHandler = (id: number) => {
    console.log(id);
  };

  return (
    <ScreenWrapper>
      <InputField />
      <View style={styles.cryptoCon}>
        <FlatList
          data={crypto}
          renderItem={(eachObj) => (
            <SemiFullCard
              name={eachObj.item.name}
              marketValue={eachObj.item.marketValue}
              cryptoAmt={eachObj.item.cryptoAmt}
              cryptoValue={eachObj.item.cryptoValue}
              image={eachObj.item.image}
              handlePress={() => cryptoHandler(eachObj.item.id)}
            />
          )}
          keyExtractor={(each) => each.id.toString()}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ListOfSendScreen;

const styles = StyleSheet.create({
  cryptoCon: {
    // marginBottom: 300,
    // flex: 1,
  },
});
