import GradientText from "../GradientText";
import { View } from "react-native";
import styles from "../Styles";

export const Title = () => {
  return (
    <View style={styles.titletitle}>
      <View style={styles.titleprogresspos}>
        <GradientText style={styles.titleprogress} text="PROGRESS" />
      </View>
      <View style={styles.titleprogresspos}>
        {/* Added copy for second shadow */}
        <GradientText style={styles.titleprogressShadow} text="PROGRESS" />
      </View>
      <View style={styles.titlefitpos}>
        <GradientText style={styles.titlefit} text="FIT" />
      </View>
    </View>
  );
};
