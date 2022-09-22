import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";

export const Setmorph = (props) => {
  const settings = {
    width: props.width,
    height: props.height,
    x: props.s,
    y: props.s,
    r: props.r,
    b: props.b,
    colorB: "#464646",
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
  };
  return (
    <View style={props.style}>
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
          <Text
            style={[
              {
                width: props.width * 0.9,
                fontFamily: "WorkSans-SemiBold",
                fontWeight: "600",
                fontSize: props.fontsize,
                color: "white",
                textAlign: "center",
              },
            ]}
          >
            {props.settext}
          </Text>
        </Neomorphism>
      </Neomorphism>
    </View>
  );
};
