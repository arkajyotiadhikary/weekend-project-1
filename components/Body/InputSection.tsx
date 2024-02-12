import React, { FC, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

import styles from "../../styles/InputSection";

import { useDispatch } from "react-redux";
import { setValue } from "../../features/nutritionSlice";
import { fetchData } from "../../api/services/fetchNutri";

const InputSection: FC = () => {
      const dispatch = useDispatch();
      const [searchIngr, setSearchIngr] = useState<string>("");

      const handleChage = (text: string) => {
            setSearchIngr(text);
      };

      const handleSubmit = async () => {
            try {
                  const result = await fetchData(searchIngr);
                  dispatch(setValue(result.items[0]));
            } catch (error) {
                  console.error("Error fetching data:", error);
            }
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
                        <FontAwesomeIcon icon={faSearch} />
                  </TouchableOpacity>
            </View>
      );
};

export default InputSection;
