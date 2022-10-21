import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Workouts } from "../components/home/Workouts";
import { Physique } from "../components/home/Physique";
import { Calendar } from "../components/home/Calendar";
import { View, ScrollView, SafeAreaView } from "react-native";
import styles from "../Styles";

export const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {/* Title */}
        <Title nav={navigation} />

        {/* Calendar */}
        <View style={styles.top20}>
          <Calendar />
        </View>

        {/* Workouts */}
        <View style={styles.l100t10}>
          <GradientText text="Workouts" style={styles.hometitles} />
        </View>

        <View style={styles.top10}>
          <Workouts nav={navigation} />
        </View>

        {/* Physique */}
        <View style={styles.l100t20}>
          <GradientText text="Physique" style={styles.hometitles} />
        </View>

        <View>
          <Physique />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
