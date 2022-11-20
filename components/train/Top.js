import { Text, View, Dimensions } from "react-native";
import styles from "../../Styles";
import { Setmorph } from "./Setmorph";

export const Top = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const sets = props.ex.value[props.currex].sets;

  return (
    <View style={styles.toppos}>
      <Text style={styles.toptitle}>{props.ex.value[props.currex].name}</Text>
      {sets.map((set) => {
        return (
          <Setmorph
            key={set.num}
            width={50 / SCALE}
            height={50 / SCALE}
            r={10 / SCALE}
            s={3 / SCALE}
            b={4 / SCALE}
            set={set}
            currset={props.currset}
            currex={props.currex}
            ex={props.ex}
            setData={props.setData}
          ></Setmorph>
        );
      })}
      {/* <Setmorph
        width={50 / SCALE}
        height={50 / SCALE}
        r={10 / SCALE}
        s={3 / SCALE}
        b={4 / SCALE}
        style={styles.t110r22}
        settext="12 x 150kg"
        fontsize={12 / SCALE}
      ></Setmorph>
      <Setmorph
        width={120 / SCALE}
        height={120 / SCALE}
        r={25 / SCALE}
        s={7 / SCALE}
        b={8 / SCALE}
        style={styles.Top60}
        settext="12 x 150kg"
        fontsize={24 / SCALE}
      />
      <Setmorph
        width={50 / SCALE}
        height={50 / SCALE}
        r={10 / SCALE}
        s={3 / SCALE}
        b={4 / SCALE}
        style={styles.t110l22}
        settext="12 x 150kg"
        fontsize={12 / SCALE}
      ></Setmorph> */}
      {/* <View style={styles.b6l27}>
        <GradientText style={styles.font16thin} text="unprogress" />
      </View> */}
      <Text style={styles.topamount}>{`${props.currset} / ${
        props.ex.value[props.currex].sets.length
      }`}</Text>
      {/* <View style={styles.b6r44}>
        <GradientText style={styles.font16bold} text="progress" />
      </View> */}
    </View>
  );
};
