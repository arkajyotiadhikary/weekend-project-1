import React, { FC } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import styles from "../../styles/InputSection";

import { useDispatch } from "react-redux";
import { setValue } from "../../features/nutritionSlice";
import { fetchData } from "../../api/services/fetchNutri";

type HandleSubmit = (e?: any) => void;

const InputSection: FC = () => {
      let seachIngr: string;

      const dispatch = useDispatch();

      // NOTE check if handle change funcitons need any type in typescript
      const handleChage = (text: string) => {
            seachIngr = text;
      };

      const handleSubmit: HandleSubmit = () => {
            (async () => {
                  try {
                        const result = await fetchData(seachIngr);
                        dispatch(setValue(result.items[0]));
                        console.log(result); // Log the fetched data
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
            })();
      };

      return (
            <View style={styles.inputSection}>
                  <View style={styles.inputHolder}>
                        <TextInput
                              style={styles.textInput}
                              placeholder="Type your food name"
                              onChangeText={handleChage}
                        />
                  </View>
                  <TouchableOpacity onPress={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </TouchableOpacity>
            </View>
      );
};

export default InputSection;
