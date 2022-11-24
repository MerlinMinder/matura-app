import { useState } from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Graphcontainer } from "../components/graph/Graphcontainer";
import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import { neostyles } from "../NeoStyles";
import styles from "../Styles";

export const Graphpage = ({ navigation }) => {
  const [chosentitle, onChangeChosentitle] = useState("");
  const titles = ["Workouts", "Exercises", "Physique"];
  const positions = [styles.l20, {}, styles.r20];

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
            {titles.map((title, index) => {
              return (
                <View style={positions[index]}>
                  <TouchableOpacity
                    onPress={() => {
                      onChangeChosentitle(title);
                    }}
                  >
                    {title === chosentitle ? (
                      <GradientText
                        style={[
                          styles.font16bold,
                          {
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 2,
                          },
                        ]}
                        text={title}
                      ></GradientText>
                    ) : (
                      <Text style={[styles.font16bold, { color: "white" }]}>
                        {title}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </Neomorphism>
        </View>

        <Graphcontainer />
      </ScrollView>
    </SafeAreaView>
  );
};
