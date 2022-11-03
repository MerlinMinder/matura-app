import { Dimensions, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Neomorphism } from "../../Neomorphism";

export const Setmorph = (props) => {
  const SCALE = 375 / Dimensions.get("screen").width;
  const main = props.set.num === props.currset;
  let settings = {
    width: main ? 120 / SCALE : 50 / SCALE,
    height: main ? 120 / SCALE : 50 / SCALE,
    x: main ? 7 / SCALE : 3 / SCALE,
    y: main ? 7 / SCALE : 3 / SCALE,
    r: main ? 25 / SCALE : 10 / SCALE,
    b: main ? 8 / SCALE : 4 / SCALE,
    colorB: "#464646",
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
  };

  const uasfont = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(
        props.set.num === props.currset ? 24 / SCALE : 12 / SCALE
      ),
    };
  });
  const uastop = useAnimatedStyle(() => {
    return {
      top: withTiming(
        props.set.num === props.currset ? 60 / SCALE : 110 / SCALE
      ),
    };
  });
  const uaspos = useAnimatedStyle(() => {
    if (props.set.num === props.currset) {
      return { left: withTiming(92.5 / SCALE) };
    } else if (props.set.num === props.currset - 1) {
      return {
        left: withTiming(22 / SCALE),
      };
    } else if (props.set.num === props.currset + 1) {
      return {
        left: withTiming(257 / SCALE),
      };
    } else if (props.set.num > props.currset) {
      return {
        left: withTiming(360 / SCALE),
      };
    } else {
      return {
        left: withTiming(-100 / SCALE),
      };
    }
  });
  return (
    <Animated.View style={[{ position: "absolute" }, uastop, uaspos]}>
      <Neomorphism settings={settings}>
        <Neomorphism
          center
          inset
          settings={{
            ...settings,
            ...{
              colorS2: "rgba(0, 0, 0, 0.7)",
              colorS1: "rgba(153, 153, 153, 0.7)",
            },
          }}
        >
          <Animated.Text
            style={[
              {
                width: main ? 108 / SCALE : 45 / SCALE,
                fontFamily: "WorkSans-SemiBold",
                fontWeight: "600",
                color: "white",
                textAlign: "center",
              },
              uasfont,
            ]}
          >
            {`${props.set.reps} x ${props.set.weight}${props.set.mes}`}
          </Animated.Text>
        </Neomorphism>
      </Neomorphism>
    </Animated.View>
  );
};

//
