import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef } from "react";

import { Button, TextInput, View } from "react-native";

export default function Index() {
  const sheet = useRef<TrueSheet>(null);

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present();
    console.log("horray! sheet has been presented 💩");
  };

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log("Bye bye 👋");
  };
  return (
    <View>
      <Button onPress={present} title="Present" />
      <TrueSheet ref={sheet} sizes={["auto", "large"]} cornerRadius={24}>
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <Button onPress={dismiss} title="Dismiss" />
      </TrueSheet>
    </View>
  );
}
