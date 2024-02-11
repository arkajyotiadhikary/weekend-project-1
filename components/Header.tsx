import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "../styles/Header";

const Header: FC = () => {
      return (
            <View style={styles.header}>
                  <Text style={styles.header_title}>Nutrition Finder</Text>
            </View>
      );
};

export default Header;
