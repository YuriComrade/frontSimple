import { Platform } from "react-native";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import { useState } from "react";
import { Input } from "../components/input";

export default Login = () => {
  const [dni, setDni] = useState();

  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: Platform.OS === "android" && 30,
          backgroundColor: "red",
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../../assets/fondo.jpg")}
          resizeMode="cover"
          style={{ flex: 1, backgroundColor: "gray", opacity: 0.7 }}
        >
          <View style={styles.logo}>
            <Image
              style={{ width: 150, height: 150, borderRadius: 75 }}
              source={require("../../assets/logo.jpg")}
            ></Image>
            <Text style={{ fontSize: 35, color: "white", textAlign: "center" }}>
              Codeando como el mejor
            </Text>
          </View>
          <View style={styles.inputs}>
            <Input
              label="ingrese su dni"
              value={dni}
              onChange={setDni}
              icon="account"
            />
          </View>
          <View style={styles.olvide}></View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 0.4,
    backgroundColor: "indigo",
  },
  inputs: {
    flex: 0.5,
    backgroundColor: "orange",
  },
  olvide: {
    flex: 0.2,
    backgroundColor: "gray",
  },
});
