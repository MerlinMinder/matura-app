import { useEffect, useState, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Timer = (props) => {
  const [time, setTime] = useState({});
  const [active, setActive] = useState(true);

  const addzero = (num) => {
    let returnstring = String(num);
    if (String(num).length === 1) {
      returnstring = "0" + returnstring;
    }
    return returnstring;
  };

  const startTimer = () => {
    setTime({ timestamp: Date.now() / 1000, seconds: 0 });
    setActive(true);
  };

  const stopTimer = () => {
    setTime({ timestamp: 0, seconds: 0 }), setActive(false);
  };

  useEffect(() => {
    if (active) {
      setTime((prev) => {
        return {
          timestamp: prev.timestamp,
          seconds: Date.now() / 1000 - prev.timestamp,
        };
      });
    }
  }, [props.totaltime]);

  const nextset = () => {
    skipset();
    stopTimer();
  };

  const skipset = () => {
    if (props.currset < props.maxset) {
      props.onChangeCurrentset((prev) => prev + 1);
    } else if (props.currex < props.maxex - 1) {
      props.onChangeCurrentset(1);
      props.onChangeCurrentex((prev) => prev + 1);
    } else {
      props.onChangeCurrentset(1);
      props.onChangeCurrentex(0);
    }
  };

  return (
    <View style={styles.Top5}>
      <Neomorphism settings={neostyles.timercontainer}>
        <TouchableOpacity
          onPressIn={() => {
            skipset();
            startTimer();
          }}
        >
          <View style={styles.t32l13}>
            <Neomorphism inset center settings={neostyles.timerskip}>
              <Text style={[styles.font22, { color: "#42FFFF" }]}>Skip</Text>
            </Neomorphism>
          </View>
        </TouchableOpacity>
        <Text style={styles.timerexercisetext}>{"DO THE EXERCISE"}</Text>
        <Text style={styles.timerexercisetime}>
          {`${addzero(Math.floor(time.seconds / 60))}:${addzero(
            Math.floor(time.seconds % 60)
          )}`}
        </Text>

        <TouchableOpacity onPressIn={nextset}>
          <View style={styles.t32r13}>
            <Neomorphism
              inset
              center
              settings={{ ...neostyles.timerskip, ...neostyles.timerdone }}
            >
              <Image source={require("../../assets/pngs/Checkmark.png")} />
            </Neomorphism>
          </View>
        </TouchableOpacity>
      </Neomorphism>
    </View>
  );
};
