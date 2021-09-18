import React from "react";
import { NavigationComponent } from "./src/components/navigation.component";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationComponent />
    </PaperProvider>
  );
}
