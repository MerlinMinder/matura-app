import { ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";
import { Timer } from "../components/train/Timer";
import { Top } from "../components/train/Top";

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
      <Title scale={SCALE} bg2={BG2} />

      <Top scale={SCALE} title="Incline Benchpress" bg2={BG2} />

      <Timer scale={SCALE} bg2={BG2} />
    </ScrollView>
  );
};
