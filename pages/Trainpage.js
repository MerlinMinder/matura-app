import { ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";

export const Trainpage = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 25 / SCALE,
      }}
    >
      {/* Title */}
      <Title scale={SCALE} />
    </ScrollView>
  );
};
