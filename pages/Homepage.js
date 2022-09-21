import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Workouts } from "../components/home/Workouts";
import { Physique } from "../components/home/Physique";
import { Calendar } from "../components/home/Calendar";
import { View, ScrollView, StyleSheet } from "react-native";
import styles from "../Styles";
import { Get } from "../Store";
import { useState } from "react";

export const Homepage = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {/* Title */}
      <Title />

      {/* Calendar */}
      <View style={styles.top20}>
        <Calendar scale={SCALE} bg2={BG2} />
      </View>

      {/* Workouts */}
      <View style={styles.l100t10}>
        <GradientText text="Workouts" style={styles.hometitles} />
      </View>

      <View style={styles.top10}>
        <Workouts scale={SCALE} bg2={BG2} />
      </View>

      {/* Physique */}
      <View style={styles.l100t20}>
        <GradientText text="Physique" style={styles.hometitles} />
      </View>

      <View>
        <Physique scale={SCALE} bg2={BG2} />
      </View>
    </ScrollView>
  );
};
