import React, { FC, useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "../../styles/ResultContainer";

import { RootState } from "../../store";
import { UseSelector, useSelector } from "react-redux";

const ResultContainer: FC = () => {
      const values = useSelector((state: RootState) => state.nutrition);

      useEffect(() => {
            setData(values);
      }, [values]);

      const [data, setData] = useState({
            calories: 0,
            carbohydrates_total_g: 0,
            cholesterol_mg: 0,
            fat_saturated_g: 0,
            fat_total_g: 0,
            fiber_g: 0,
            name: "",
            potassium_mg: 0,
            protein_g: 0,
            serving_size_g: 0,
            sodium_mg: 0,
            sugar_g: 0,
      });

      return (
            <View style={styles.resultContainer}>
                  <View style={styles.foodTitle}>
                        <Text style={styles.foodNameTitle}>Food Name</Text>
                        <Text style={styles.foodName}>{data.name}</Text>
                  </View>
                  <View style={styles.nutri}>
                        <View style={styles.nutri_data}>
                              <Text>Calories</Text>
                              <Text>{data.calories}</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Carbohydrates</Text>
                              <Text>{data.carbohydrates_total_g} g</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Cholesterol</Text>
                              <Text>{data.cholesterol_mg} mg</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Saturated Fat</Text>
                              <Text>{data.fat_saturated_g} g</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Total Fat</Text>
                              <Text>{data.fat_total_g} g</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Fiber</Text>
                              <Text>{data.fiber_g} g</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Potassium</Text>
                              <Text>{data.potassium_mg} mg</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Protien</Text>
                              <Text>{data.protein_g} g</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Sodium</Text>
                              <Text>{data.sodium_mg} mg</Text>
                        </View>
                        <View style={styles.nutri_data}>
                              <Text>Sugar</Text>
                              <Text>{data.sugar_g} g</Text>
                        </View>
                  </View>
            </View>
      );
};

export default ResultContainer;
