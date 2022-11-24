import { ScrollView, Text, View, SafeAreaView } from "react-native";
import { Graphcontainer } from "../components/graph/Graphcontainer";
import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import { neostyles } from "../NeoStyles";
import styles from "../Styles";

export const Graphpage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {/* Title */}
        <Title nav={navigation} />

        <View style={styles.top30}>
          <Neomorphism
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            settings={neostyles.graphmenu}
          >
            <Text style={styles.graphworkouttext}>Workouts</Text>
            <View>
              <GradientText
                style={[
                  styles.font16bold,
                  {
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 2,
                  },
                ]}
                text="Exercises"
              />
            </View>
            <Text style={styles.graphphysiquetext}>Physique</Text>
          </Neomorphism>
        </View>

        <Graphcontainer />
      </ScrollView>
    </SafeAreaView>
  );
};
