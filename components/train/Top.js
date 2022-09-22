import { Text, View } from "react-native";
import GradientText from "../../GradientText";
import styles from "../../Styles";
import { Setmorph } from "./Setmorph";

export const Top = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <View style={styles.toppos}>
      <Text style={styles.toptitle}>{props.title}</Text>
      <Setmorph
        bg2={BG2}
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
        bg2={BG2}
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
        bg2={BG2}
        width={50 / SCALE}
        height={50 / SCALE}
        r={10 / SCALE}
        s={3 / SCALE}
        b={4 / SCALE}
        style={styles.t110l22}
        settext="12 x 150kg"
        fontsize={12 / SCALE}
      ></Setmorph>
      <View style={styles.b6l27}>
        <GradientText style={styles.font16thin} text="unprogress" />
      </View>
      <Text style={styles.topamount}>3 / 6</Text>
      <View style={styles.b6r44}>
        <GradientText style={styles.font16bold} text="progress" />
      </View>
    </View>
  );
};
