import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Workouts } from "../components/home/Workouts";
import { Physique } from "../components/home/Physique";
import { Calendar } from "../components/home/Calendar";
import { View, ScrollView, Text } from "react-native";
import styles from "../Styles";
import { Del, Get, GetAll, Save } from "../Store";
import { useState } from "react";

export const Homepage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {/* Title */}
      <Title />

      {/* Calendar */}
      <View style={styles.top20}>
        <Calendar />
      </View>

      {/* Workouts */}
      <View style={styles.l100t10}>
        <GradientText text="Workouts" style={styles.hometitles} />
      </View>

      <View style={styles.top10}>
        <Workouts />
      </View>

      {/* Physique */}
      <View style={styles.l100t20}>
        <GradientText text="Physique" style={styles.hometitles} />
      </View>

      <View>
        <Physique />
      </View>
    </ScrollView>
  );
};
