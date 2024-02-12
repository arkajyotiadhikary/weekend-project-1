import React, { FC } from "react";
import { View } from "react-native";

// styles
import styles from "../styles/Home";

// components
import Header from "../components/Header";
import Body from "../components/Body";

const Home: FC = () => {
      return (
            <View style={styles.home}>
                  <Header />
                  <Body />
            </View>
      );
};

export default Home;
