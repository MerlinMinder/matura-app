import { useEffect, useState, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import styles from "../../Styles";

const addzero = (num) => {
  let returnstring = String(num);
  if (String(num).length === 1) {
    returnstring = "0" + returnstring;
  }
  return returnstring;
};

export const Timer = (props) => {
  const [time, setTime] = useState({});
  const [displaytext, onChangedisplaytext] = useState("START WORKOUT");
  const [trainstate, onChangeTrainstate] = useState("start");
  const [sectext, onChangeSectext] = useState("Quit");

  useEffect(() => {
    if (trainstate === "train") {
      setTime((prev) => {
        return {
          timestart: prev.timestart,
          seconds: Date.now() / 1000 - prev.timestart,
        };
      });
    }
    if (trainstate === "rest") {
      setTime((prev) => {
        if (prev.seconds < 1) {
          mainpress("rest");
          return {};
        } else {
          return {
            timestart: prev.timestart,
            seconds: prev.timestart - Date.now() / 1000,
          };
        }
      });
    }
  }, [props.totaltime]);

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
        onChangeSectext("Skip");
        return;
      case "ex":
        setTime({ timestart: Date.now() / 1000, seconds: 0 });
        onChangeTrainstate("train");
        onChangedisplaytext("DO THE EXERCISE");
        props.onChangeCurrentset((prev) => prev + 1);
        return;
      case "train":
        onChangedisplaytext("REST");
        onChangeTrainstate("rest");
        onChangeSectext("+10s");
        setTime({
          timestart: Date.now() / 1000 + props.resttime,
          seconds: props.resttime,
        });
        props.setDoneex((prev) => [
          ...prev,
          ...[{ ex: props.currex, set: props.currset }],
        ]);
        props.onChangeCurrentset((prev) => prev + 1);
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
            onChangeSectext("Skip");
            return;
          }
        } else {
          setTime({ timestart: Date.now() / 1000, seconds: 0 });
          onChangeTrainstate("train");
          onChangedisplaytext("DO THE EXERCISE");
          onChangeSectext("Skip");
        }
        return;
      case "end":
        props.setFinish(true);
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
        setTime((prev) => {
          return {
            timestart: prev.timestart + 10,
            seconds: prev.seconds + 10,
          };
        });
        return;
    }
  };

  return (
    <View style={styles.Top5}>
      <Neomorphism settings={neostyles.timercontainer}>
        {trainstate != "end" ? (
          <TouchableOpacity
            onPressIn={() => {
              secpress(trainstate);
            }}
          >
            <View style={styles.t32l13}>
              <Neomorphism inset center settings={neostyles.timerskip}>
                <Text
                  style={[
                    styles.font22,
                    { color: sectext === "Skip" ? "#42FFFF" : "#FF8142" },
                  ]}
                >
                  {sectext}
                </Text>
              </Neomorphism>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <Text style={styles.timerexercisetext}>{displaytext}</Text>

        {trainstate === "train" || trainstate === "rest" ? (
          <Text
            style={[
              styles.timerexercisetime,
              { color: trainstate === "train" ? "#FFC042" : "#42FFFF" },
            ]}
          >
            {`${addzero(Math.floor(time.seconds / 60))}:${addzero(
              Math.floor(time.seconds % 60)
            )}`}
          </Text>
        ) : (
          <></>
        )}

        <TouchableOpacity
          onPressIn={() => {
            mainpress(trainstate);
          }}
        >
          <View style={styles.t32r13}>
            <Neomorphism
              inset
              center
              settings={{ ...neostyles.timerskip, ...neostyles.timerdone }}
            >
              {trainstate != "rest" ? (
                <Image source={require("../../assets/pngs/Checkmark.png")} />
              ) : (
                <Text style={[styles.font22, { color: "#62FF42" }]}>Skip</Text>
              )}
            </Neomorphism>
          </View>
        </TouchableOpacity>
      </Neomorphism>
    </View>
  );
};

// const completeSet = () => {
//   props.onChangeCompleted((prev) => {
//     const returnobj = new Object();
//     const cex = { ...props.ex[props.currex] };
//     let cexsets = null;
//     if (prev[props.ex[props.currex].id]) {
//       if (prev[props.ex[props.currex].id].sets) {
//         cexsets = [
//           ...prev[props.ex[props.currex].id].sets,
//           ...[cex.sets[props.currset - 1]],
//         ];
//       } else {
//         cexsets = [cex.sets[props.currset - 1]];
//       }
//     } else {
//       cexsets = [cex.sets[props.currset - 1]];
//     }
//     delete cex.sets;
//     cex["sets"] = cexsets;
//     returnobj[props.ex[props.currex].id] = cex;
//     return { ...prev, ...returnobj };
//   });
// };
