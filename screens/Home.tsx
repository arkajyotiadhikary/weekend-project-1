import React, { FC, useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { View } from "react-native";

// store stuffs
import { setValue } from "../features/nutritionSlice";

// styles
import styles from "../styles/Home";

import { fetchData } from "../api/services/fetchNutri";

// components
import Header from "../components/Header";
import Body from "../components/Body";

const Home: FC = () => {
      const dispatch = useDispatch();
      useEffect(() => {}, []);

      return (
            <View style={styles.home}>
                  <Header />
                  <Body />
            </View>
      );
};

export default Home;
