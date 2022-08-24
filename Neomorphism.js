import React from "react";
import { Canvas, Fill, RoundedRect, Shadow } from "@shopify/react-native-skia";
import { View } from "react-native";

export const Neomorphism = (props) => {
  // values to calculate padding for the shadows
  const X = (props.x + props.b) * 1.5;
  const Y = (props.y + props.b) * 1.5;

  // dropshadow = false, inset = true
  const inset = props.inset || false;

  return (
    <View
      style={{
        // same size as canvas to not add children outside
        width: inset
          ? props.width
          : props.padx
          ? props.width + props.padx
          : props.width + X * 2,
        height: inset
          ? props.height
          : props.pady
          ? props.height + props.pady
          : props.height + Y * 2,
      }}
    >
      {/* Background and shadows */}
      <Canvas
        style={{
          // adjust size to inset , dropshadow with padding
          width: inset ? props.width : props.width + X * 2,
          height: inset ? props.height : props.height + Y * 2,
        }}
      >
        <Fill color="transparent" />
        <RoundedRect
          x={inset ? 0 : X}
          y={inset ? 0 : Y}
          width={props.width}
          height={props.height}
          r={props.r}
          color={props.colorB}
        >
          <Shadow
            dx={props.x}
            dy={props.y}
            blur={props.b}
            color={props.colorS1}
            inner={inset}
          />
          <Shadow
            dx={-props.x}
            dy={-props.y}
            blur={props.b}
            color={props.colorS2}
            inner={inset}
          />
        </RoundedRect>
      </Canvas>

      {/* object to include children */}
      <View
        style={[
          props.style,
          {
            // move children frame to top left of canvas
            width: props.width,
            height: props.height,
            top: inset ? -props.height : -props.height - Y,
            left: inset ? 0 : X,
          },
        ]}
      >
        {props.children}
      </View>
    </View>
  );
};
