import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

/**
 * Reusable component to run a callback whenever the screen is focused.
 * @param callback - Function to execute on screen focus
 */
const UpdateScreen = ({ callback }: { callback: () => void }) => {
  useFocusEffect(
    useCallback(() => {
      callback();
    }, [callback])
  );

  return null; // This component renders nothing
};

export default UpdateScreen;
