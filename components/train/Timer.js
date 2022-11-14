import { useEffect, useState, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

export const Timer = (props) => {
  const [time, setTime] = useState({});
  const [displaytext, onChangedisplaytext] = useState("START WORKOUT");
  const [trainstate, onChangeTrainstate] = useState("start");

  useEffect(() => {
    if (trainstate === "train") {
      setTime((prev) => {
        return {
          timestart: prev.timestart,
          seconds: Date.now() / 1000 - prev.timestart,
        };
      });
    }
  }, [props.totaltime]);

  const addzero = (num) => {
    let returnstring = String(num);
    if (String(num).length === 1) {
      returnstring = "0" + returnstring;
    }
    return returnstring;
  };

  const incex = () => {
    if (props.currex < props.maxex - 1) {
      props.onChangeCurrentex((prev) => prev + 1);
      props.onChangeCurrentset(0);
      return 1;
    } else return 0;
  };

  const mainpress = (state) => {
    switch (state) {
      case "start":
        props.onChangeStarted(true);
        onChangeTrainstate("ex");
        onChangedisplaytext("START EXERCISE");
        return;
      case "ex":
        setTime({ timestart: Date.now() / 1000, seconds: 0 });
        onChangeTrainstate("train");
        onChangedisplaytext("DO THE EXERCISE");
        props.onChangeCurrentset((prev) => prev + 1);
        return;
      case "train":
        props.onChangeCurrentset((prev) => prev + 1);
        onChangedisplaytext("REST");
        onChangeTrainstate("rest");
        return;
      case "rest":
        if (props.currset > props.maxset) {
          if (!incex()) {
            onChangedisplaytext("FINISH WORKOUT");
            onChangeTrainstate("end");
            return;
          } else {
            onChangedisplaytext("START EXERCISE");
            onChangeTrainstate("ex");
            return;
          }
        } else {
          setTime({ timestart: Date.now() / 1000, seconds: 0 });
          onChangeTrainstate("train");
          onChangedisplaytext("DO THE EXERCISE");
        }
        return;
      case "end":
        props.nav.navigate("home");
        return;
    }
  };

  const secpress = (state) => {
    switch (state) {
      case "start":
        props.nav.navigate("workout", { id: props.id });
        return;
      case "ex":
        if (!incex()) {
          onChangedisplaytext("FINISH WORKOUT");
          onChangeTrainstate("end");
          return;
        } else {
          onChangedisplaytext("START EXERCISE");
          onChangeTrainstate("ex");
          return;
        }
      case "train":
        props.onChangeCurrentset((prev) => prev + 1);
        onChangedisplaytext("REST");
        onChangeTrainstate("rest");
        return;
      case "rest":
        return;
    }
  };

  return (
    <View style={styles.Top5}>
      <Neomorphism settings={neostyles.timercontainer}>
        {trainstate != "end" ? (
          <TouchableOpacity
            onPressIn={() => {
              console.log("in");
              secpress(trainstate);
            }}
          >
            <View style={styles.t32l13}>
              <Neomorphism inset center settings={neostyles.timerskip}>
                <Text style={[styles.font22, { color: "#42FFFF" }]}>Skip</Text>
              </Neomorphism>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <Text style={styles.timerexercisetext}>{displaytext}</Text>

        {trainstate === "train" || trainstate === "rest" ? (
          <Text style={styles.timerexercisetime}>
            {`${addzero(Math.floor(time.seconds / 60))}:${addzero(
              Math.floor(time.seconds % 60)
            )}`}
          </Text>
        ) : (
          <></>
        )}

        <TouchableOpacity
          onPressIn={() => {
            console.log("out");
            mainpress(trainstate);
          }}
        >
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

// const startTimer = () => {
//   setTime({ timestamp: Date.now() / 1000, seconds: 0 });
//   setActive(true);
// };

// const stopTimer = () => {
//   setTime({ timestamp: 0, seconds: 0 }), setActive(false);
// };

// useEffect(() => {
//   if (active) {
//     setTime((prev) => {
//       return {
//         timestamp: prev.timestamp,
//         seconds: Date.now() / 1000 - prev.timestamp,
//       };
//     });
//   }
// }, [props.totaltime]);

// const nextset = () => {
//   skipset();
//   stopTimer();
// };

// const skipset = () => {
//   if (props.currset < props.maxset) {
//     props.onChangeCurrentset((prev) => prev + 1);
//   } else if (props.currex < props.maxex - 1) {
//     props.onChangeCurrentset(1);
//     props.onChangeCurrentex((prev) => prev + 1);
//   } else {
//     props.onChangeCurrentset(1);
//     props.onChangeCurrentex(0);
//   }
// };
