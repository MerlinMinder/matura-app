import React from "react";
import { Canvas, Fill, RoundedRect, Shadow } from "@shopify/react-native-skia";
import { View } from "react-native";

export const Neomorphism = (props) => {
  // values to calculate padding for the shadows
  const X = (props.settings.x + props.settings.b) * 1.5;
  const Y = (props.settings.y + props.settings.b) * 1.5;

  // dropshadow = false, inset = true
  const inset = props.inset || false;

  return (
    <View
      style={{
        // same size as canvas to not add children outside
        width: inset
          ? props.settings.width
          : props.settings.padx
          ? props.settings.width + props.settings.padx
          : props.settings.width + X * 2,
        height: inset
          ? props.settings.height
          : props.settings.pady
          ? props.settings.height + props.settings.pady
          : props.settings.height + Y * 2,
      }}
    >
      {/* Background and shadows */}
      <Canvas
        style={{
          // adjust size to inset , dropshadow with padding
          width: inset ? props.settings.width : props.settings.width + X * 2,
          height: inset ? props.settings.height : props.settings.height + Y * 2,
        }}
      >
        <Fill color="transparent" />
        <RoundedRect
          x={inset ? 0 : X}
          y={inset ? 0 : Y}
          width={props.settings.width}
          height={props.settings.height}
          r={props.settings.r}
          color={props.settings.colorB}
        >
          <Shadow
            dx={props.settings.x}
            dy={props.settings.y}
            blur={props.settings.b}
            color={props.settings.colorS1}
            inner={inset}
          />
          <Shadow
            dx={-props.settings.x}
            dy={-props.settings.y}
            blur={props.settings.b}
            color={props.settings.colorS2}
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
            width: props.settings.width,
            height: props.settings.height,
            top: inset ? -props.settings.height : -props.settings.height - Y,
            left: inset ? 0 : X,
          },
          props.center
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {},
        ]}
      >
        {props.children}
      </View>
    </View>
  );
};
