import { useEffect, useState } from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Graphcontainer } from "../components/graph/Graphcontainer";
import { Title } from "../components/Title";
import GradientText from "../GradientText";
import { Neomorphism } from "../Neomorphism";
import { neostyles } from "../NeoStyles";
import { Get } from "../Store";
import styles from "../Styles";

export const Graphpage = ({ navigation }) => {
  const [chosentitle, onChangeChosentitle] = useState("");
  const [calendar, setCalendar] = useState(null);
  const [graphdata, onChangeGraphdata] = useState({});
  const titles = ["Workouts", "Exercises", "Physique"];
  const positions = [styles.l20, {}, styles.r20];

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      Get("calendar", setCalendar);
    });
    return listener;
  }, [navigation]);

  useEffect(() => {
    if (!calendar) return;
    const graphdata = {};
    switch (chosentitle) {
      case "Physique":
        Object.entries(calendar).map((day) => {
          if (day[1].physique) {
            Object.entries(day[1].physique).map((type) => {
              if (!graphdata[type[0]]) {
                graphdata[type[0]] = [{ [day[0]]: type[1] }];
              } else {
                graphdata[type[0]].push({ [day[0]]: type[1] });
              }
            });
          } else {
            return;
          }
        });
    }
    console.log(graphdata);
    onChangeGraphdata(graphdata);
  }, [chosentitle]);

  if (!calendar) {
    return null;
  }

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
        {graphdata === {} ? (
          <Text>No data available</Text>
        ) : (
          Object.entries(graphdata).map((graphentry) => {
            return <Graphcontainer graphdata={graphentry} />;
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
