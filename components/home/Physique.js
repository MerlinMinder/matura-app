import { Text, TouchableOpacity, View } from "react-native";
import GradientText from "../../GradientText";
import { Neomorphism } from "../../Neomorphism";
import { Measure } from "./parts/Measure";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import Svg, { Path } from "react-native-svg";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { Get, Merge } from "../../Store";

export const Physique = () => {
  let bmi = 21.7;
  let bmiwidth = 130;
  const [mes, onChangeMes] = useState("cm");
  const [edittext, onChangeEdittext] = useState("Edit");
  const [measurestate, setMeasureState] = useState(0);

  useEffect(() => {
    Get("physique", setMeasureState);
  }, []);

  const measures = [
    "Arm (right)",
    "Arm (left)",
    "Chest",
    "Shoulders",
    "Waist",
    "Hip",
    "Leg (right)",
    "Leg (left)",
    "Calf (right)",
    "Calf (left)",
  ];

  const colors = [
    "#42FFFF",
    "#42FFFF",
    "#62FF42",
    "#62FF42",
    "#FFC042",
    "#FFA142",
    "#FF8142",
    "#FF5242",
  ];

  if (!measurestate) {
    return null;
  }

  return (
    <View>
      <Neomorphism center settings={neostyles.physiquecontainer}>
        <View style={styles.physiquebmi}>
          <GradientText text="BMI" style={styles.font20} />
        </View>
        <Measure
          style={styles.top48}
          word="Height"
          mes={mes}
          edit={edittext}
          measures={measurestate}
          onChangeMeasures={setMeasureState}
        />
        <Measure
          style={styles.top10}
          word="Weight"
          mes="kg"
          edit={edittext}
          measures={measurestate}
          onChangeMeasures={setMeasureState}
        />
        <LinearGradient
          style={styles.physiquegradient}
          colors={colors}
          locations={[0, 0.15, 0.3, 0.6, 0.7, 0.8, 0.9, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        ></LinearGradient>
        <View style={[styles.physiquecircle, { left: bmiwidth }]}>
          <Neomorphism
            settings={{ ...neostyles.physiqueball, ...{ colorB: "#62FF42" } }}
            inset
          ></Neomorphism>
          <Text style={styles.physiquebmitext}>{bmi}</Text>
        </View>
        <View style={styles.physiquebody}>
          <GradientText text="Body" style={styles.font20} />
        </View>
        {/* <View style={styles.physiquesettings}>
          <Svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M25.3125 15.7125V14.2781L27.1125 12.7031C27.4443 12.4107 27.662 12.0104 27.7272 11.5729C27.7924 11.1354 27.7009 10.689 27.4687 10.3125L25.2562 6.56252C25.0918 6.27776 24.8554 6.04125 24.5708 5.8767C24.2861 5.71215 23.9632 5.62535 23.6344 5.62501C23.4306 5.62345 23.2279 5.65512 23.0344 5.71877L20.7562 6.48752C20.3629 6.22615 19.9526 5.99125 19.5281 5.78439L19.05 3.42189C18.9643 2.99027 18.7295 2.60255 18.3867 2.32661C18.0439 2.05067 17.615 1.90408 17.175 1.91251H12.7875C12.3475 1.90408 11.9186 2.05067 11.5758 2.32661C11.233 2.60255 10.9982 2.99027 10.9125 3.42189L10.4344 5.78439C10.0068 5.9912 9.5934 6.22609 9.19687 6.48752L6.96562 5.68127C6.76996 5.63029 6.56734 5.61129 6.36562 5.62501C6.03681 5.62535 5.71388 5.71215 5.42921 5.8767C5.14454 6.04125 4.90814 6.27776 4.74374 6.56252L2.53124 10.3125C2.31242 10.6884 2.2311 11.1288 2.30123 11.558C2.37135 11.9873 2.58855 12.3789 2.91562 12.6656L4.68749 14.2875V15.7219L2.91562 17.2969C2.57931 17.5856 2.35617 17.9842 2.2858 18.4218C2.21544 18.8595 2.30239 19.3079 2.53124 19.6875L4.74374 23.4375C4.90814 23.7223 5.14454 23.9588 5.42921 24.1233C5.71388 24.2879 6.03681 24.3747 6.36562 24.375C6.56938 24.3766 6.77204 24.3449 6.96562 24.2813L9.24374 23.5125C9.63706 23.7739 10.0473 24.0088 10.4719 24.2156L10.95 26.5781C11.0357 27.0098 11.2705 27.3975 11.6133 27.6734C11.9561 27.9494 12.385 28.0959 12.825 28.0875H17.25C17.69 28.0959 18.1189 27.9494 18.4617 27.6734C18.8045 27.3975 19.0393 27.0098 19.125 26.5781L19.6031 24.2156C20.0307 24.0088 20.4441 23.7739 20.8406 23.5125L23.1094 24.2813C23.3029 24.3449 23.5056 24.3766 23.7094 24.375C24.0382 24.3747 24.3611 24.2879 24.6458 24.1233C24.9304 23.9588 25.1668 23.7223 25.3312 23.4375L27.4687 19.6875C27.6876 19.3116 27.7689 18.8713 27.6988 18.442C27.6286 18.0127 27.4114 17.6211 27.0844 17.3344L25.3125 15.7125ZM23.6344 22.5L20.4187 21.4125C19.666 22.0501 18.8057 22.5485 17.8781 22.8844L17.2125 26.25H12.7875L12.1219 22.9219C11.2016 22.5765 10.346 22.0789 9.59062 21.45L6.36562 22.5L4.15312 18.75L6.70312 16.5C6.52977 15.5296 6.52977 14.5361 6.70312 13.5656L4.15312 11.25L6.36562 7.50002L9.58124 8.58751C10.334 7.94991 11.1943 7.4515 12.1219 7.11564L12.7875 3.75001H17.2125L17.8781 7.07814C18.7983 7.42354 19.654 7.92109 20.4094 8.55002L23.6344 7.50002L25.8469 11.25L23.2969 13.5C23.4702 14.4705 23.4702 15.4639 23.2969 16.4344L25.8469 18.75L23.6344 22.5Z"
              fill="white"
            />
            <Path
              d="M15 20.625C13.8875 20.625 12.7999 20.2951 11.8749 19.677C10.9499 19.0589 10.2289 18.1804 9.80318 17.1526C9.37744 16.1248 9.26604 14.9938 9.48309 13.9026C9.70013 12.8115 10.2359 11.8092 11.0225 11.0225C11.8092 10.2359 12.8115 9.70013 13.9026 9.48309C14.9938 9.26604 16.1248 9.37744 17.1526 9.80318C18.1804 10.2289 19.0589 10.9499 19.677 11.8749C20.2951 12.7999 20.625 13.8875 20.625 15C20.6325 15.7408 20.4922 16.4756 20.2121 17.1615C19.9321 17.8473 19.5181 18.4704 18.9942 18.9942C18.4704 19.5181 17.8473 19.9321 17.1615 20.2121C16.4756 20.4922 15.7408 20.6325 15 20.625V20.625ZM15 11.25C14.5044 11.2385 14.0116 11.3276 13.5514 11.5119C13.0912 11.6963 12.6732 11.9721 12.3226 12.3226C11.9721 12.6732 11.6963 13.0912 11.5119 13.5514C11.3276 14.0116 11.2385 14.5044 11.25 15C11.2385 15.4956 11.3276 15.9884 11.5119 16.4486C11.6963 16.9088 11.9721 17.3268 12.3226 17.6774C12.6732 18.0279 13.0912 18.3037 13.5514 18.4881C14.0116 18.6724 14.5044 18.7615 15 18.75C15.4956 18.7615 15.9884 18.6724 16.4486 18.4881C16.9088 18.3037 17.3268 18.0279 17.6774 17.6774C18.0279 17.3268 18.3037 16.9088 18.4881 16.4486C18.6724 15.9884 18.7615 15.4956 18.75 15C18.7615 14.5044 18.6724 14.0116 18.4881 13.5514C18.3037 13.0912 18.0279 12.6732 17.6774 12.3226C17.3268 11.9721 16.9088 11.6963 16.4486 11.5119C15.9884 11.3276 15.4956 11.2385 15 11.25Z"
              fill="white"
            />
          </Svg>
        </View> */}
        <View style={styles.top55}>
          {measures.map((measure) => {
            return (
              <Measure
                key={measure}
                style={styles.top10}
                word={measure}
                mes={mes}
                edit={edittext}
                measures={measurestate}
                onChangeMeasures={setMeasureState}
              />
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            onChangeEdittext(edittext === "Edit" ? "Save" : "Edit");
            if (edittext === "Save") {
              let today = new Date();
              today.setUTCHours(0, 0, 0, 0);
              const senddata = {};
              senddata[today.getTime()] = { physique: measurestate };
              Merge("physique", measurestate);
              Merge("calendar", senddata);
              Get("physique", setMeasureState);
            }
          }}
        >
          <View style={styles.top10}>
            <Neomorphism center inset settings={neostyles.physiqueedit}>
              <Text style={[styles.font20, { color: "white" }]}>
                {edittext}
              </Text>
            </Neomorphism>
          </View>
        </TouchableOpacity>
      </Neomorphism>
    </View>
  );
};
