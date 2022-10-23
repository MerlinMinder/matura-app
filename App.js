import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Homepage } from "./pages/Homepage";
import { Workoutpage } from "./pages/Workoutpage";
import { Exercisepage } from "./pages/Exercisepage";
import { Trainpage } from "./pages/Trainpage";
import { Graphpage } from "./pages/Graphpage";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Del, Get, GetAll, Save } from "./Store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // const SCALE = 375 / Dimensions.get("screen").width;
  // const BG2 = "#454545";
  const [calendar, setCalendar] = useState({});
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    // get calendar/database or set first date in calendar

    Get("calendar", setCalendar);
    if (calendar === null) {
      console.log("first load");
      Save("calendar", { calendar: { day: Date() } });
      Get("calendar", setCalendar);
    }

    Get("workouts", setWorkouts);
    if (workouts === null) {
      console.log("first load");
      Save("workouts", {});
      Get("workouts", setWorkouts);
    }
  }, []);

  // load the WorkSans fonts

  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Light": require("./assets/fonts/WorkSans-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // Wrap App (SafeAreaView) in NavigationContainer for navigation
  // Wrap all in gestureHandlerRoot
  // to account for gesture detection over the whole app

  const Stack = createNativeStackNavigator();

  const App = gestureHandlerRootHOC(() => (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Homepage} />
        <Stack.Screen name="workout" component={Workoutpage} />
        <Stack.Screen name="exercise" component={Exercisepage} />
        <Stack.Screen name="train" component={Trainpage} />
      </Stack.Navigator>
      {/* <Graphpage scale={SCALE} bg2={BG2} /> */}
    </NavigationContainer>
  ));

  return <App />;
}
