import { useEffect, useRef, useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Neomorphism } from "../../Neomorphism";
import { neostyles } from "../../NeoStyles";
import { Get, Merge } from "../../Store";
import styles from "../../Styles";

export const Name = (props) => {
  const [title, onChangeTitle] = useState(props.title);
  const [color, onChangeColor] = useState(props.color);
  const [colorcounter, onChangeColorcounter] = useState(0);
  const refTextInput = useRef({});

  const colors = [
    "#42FFFF",
    "#ff8142",
    "#ffc042",
    "#ffff42",
    "#c0ff42",
    "#42ff42",
    "#42ffc0",
    "#4281ff",
    "#8142ff",
    "#ff42ff",
  ];

  const changeColor = () => {
    if (colorcounter < 9) {
      onChangeColorcounter((prev) => prev + 1);
    } else {
      onChangeColorcounter(0);
    }
    onChangeColor(colors[colorcounter]);
    Merge("workouts", { [props.id]: { color: colors[colorcounter] } });
  };

  return (
    <View style={styles.width320}>
      <TextInput
        style={styles.nametitle}
        onChangeText={onChangeTitle}
        placeholder="Workout"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={title}
        ref={refTextInput}
        selectTextOnFocus={true}
        keyboardType="default"
        onEndEditing={() => {
          const datasend = new Object();
          datasend[props.id] = { title: title };
          Merge("workouts", datasend);
        }}
        multiline={false}
        numberOfLines={1}
      ></TextInput>
      <TouchableWithoutFeedback
        onPress={() => {
          refTextInput.current.focus();
        }}
      >
        <View style={styles.namepen}>
          <Svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M17.3073 0C16.6164 0 15.947 0.277927 15.4236 0.799967L15.3469 0.877489L14.831 0.387613L14.263 0.955012L1.39089 13.8139L1.21094 13.9953L1.15894 14.2534L0.255891 18.7893L0 20L1.21094 19.7443L5.75095 18.8413L6.00932 18.7893L6.19092 18.6095L19.0589 5.74822L19.6269 5.18082L19.1365 4.69177L19.1885 4.63898L19.2133 4.58785C19.4625 4.33934 19.6602 4.04421 19.7952 3.71933C19.9302 3.39445 19.9998 3.04618 20 2.69442C20.0002 2.34266 19.9311 1.9943 19.7965 1.66925C19.662 1.34419 19.4646 1.0488 19.2158 0.799967C18.7101 0.291739 18.0237 0.00413383 17.3065 0H17.3073ZM17.3073 1.62468C17.5632 1.62468 17.8356 1.74013 18.0552 1.95951C18.4952 2.3999 18.4952 2.98874 18.0552 3.42914L17.9776 3.50583L16.5083 2.03785L16.5851 1.96033C16.8046 1.74096 17.0498 1.6255 17.3073 1.6255V1.62468ZM14.8557 2.70752L17.3073 5.15525L16.1203 6.36757L13.644 3.89345L14.8574 2.70752H14.8557ZM12.509 5.07855L14.9341 7.50072L6.31804 16.1354L5.9829 14.6394L5.87889 14.1248L5.36298 14.0217L3.86561 13.6877L12.5081 5.07938L12.509 5.07855ZM2.6819 15.1029L4.48635 15.5152L4.89908 17.3189L3.2234 17.6545L2.34512 16.7787L2.68108 15.1045L2.6819 15.1029Z"
              fill="white"
            />
          </Svg>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.l20t68}>
        <TouchableOpacity onPress={changeColor}>
          <Neomorphism
            inset
            settings={{ ...neostyles.nameline, ...{ colorB: color } }}
          ></Neomorphism>
        </TouchableOpacity>
      </View>
      <View style={styles.namedumbbell}>
        <Svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M4 0V14H7V8H13V14H16V0H13V6H7V0H4ZM1 10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H3V3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V6H0V8H1V10ZM19 4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H17V11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V8H20V6H19V4Z"
            fill="white"
          />
        </Svg>
      </View>
      <Text style={styles.nameexercises}>{props.exlength} Exercises</Text>
      <Text style={styles.namerecent}>recent</Text>
      <View style={styles.nametimer}>
        <Svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M4.97 0C4.89574 0 4.82452 0.0294999 4.77201 0.0820101C4.7195 0.13452 4.69 0.205739 4.69 0.28V0.84C4.69 0.914261 4.7195 0.98548 4.77201 1.03799C4.82452 1.0905 4.89574 1.12 4.97 1.12H5.39V1.8613C2.36096 2.2099 0 4.78926 0 7.91C0 11.2676 2.73238 14 6.09 14C9.44762 14 12.18 11.2676 12.18 7.91C12.181 6.76078 11.8546 5.63505 11.2392 4.66452L11.8325 4.18418L12.0968 4.51066C12.12 4.53925 12.1485 4.56301 12.1808 4.58057C12.2131 4.59813 12.2486 4.60916 12.2851 4.61302C12.3217 4.61688 12.3587 4.6135 12.3939 4.60307C12.4292 4.59264 12.4621 4.57537 12.4907 4.55224L12.9261 4.19972C12.9837 4.15296 13.0204 4.08522 13.0281 4.0114C13.0358 3.93758 13.0139 3.86371 12.9672 3.80604L11.5577 2.065C11.5346 2.03641 11.506 2.01265 11.4737 1.99509C11.4414 1.97753 11.406 1.9665 11.3694 1.96264C11.3328 1.95878 11.2959 1.96216 11.2606 1.97259C11.2253 1.98302 11.1925 2.00029 11.1639 2.02342L10.7285 2.37594C10.6708 2.4227 10.6341 2.49044 10.6264 2.56426C10.6187 2.63808 10.6406 2.71195 10.6873 2.76962L10.9518 3.0961L10.361 3.57406C9.4178 2.64474 8.17362 2.0209 6.79 1.86158V1.12H7.21C7.28426 1.12 7.35548 1.0905 7.40799 1.03799C7.4605 0.98548 7.49 0.914261 7.49 0.84V0.28C7.49 0.205739 7.4605 0.13452 7.40799 0.0820101C7.35548 0.0294999 7.28426 0 7.21 0L4.97 0ZM6.09 2.8C8.918 2.8 11.2 5.082 11.2 7.91C11.2 10.738 8.918 13.02 6.09 13.02C3.262 13.02 0.98 10.738 0.98 7.91C0.98 5.082 3.262 2.8 6.09 2.8ZM6.09028 3.84202L6.09 7.91L9.34276 10.3526C9.79649 9.74834 10.0729 9.02967 10.1411 8.27713C10.2093 7.52459 10.0666 6.76792 9.72888 6.09196C9.39118 5.41602 8.87188 4.8475 8.22921 4.45012C7.58653 4.05275 6.84588 3.84223 6.09028 3.84216V3.84202Z"
            fill="white"
          />
        </Svg>
      </View>
      <Text style={styles.nametime}>{props.recent}</Text>
    </View>
  );
};
