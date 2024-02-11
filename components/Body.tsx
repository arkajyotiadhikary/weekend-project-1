import React, { FC } from "react";
import { View } from "react-native";

import styles from "../styles/Body";

// sub components
import InputSection from "./Body/InputSection";
import ResultContainer from "./Body/ResultContainer";

const Body: FC = () => {
      return (
            <View style={styles.body}>
                  <InputSection />
                  <ResultContainer />
            </View>
      );
};

export default Body;
