import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

type WarningModalProps = {
  visible: boolean;
  onClose: () => void;
};

const WarningModal: React.FC<WarningModalProps> = ({ visible, onClose }) => {
  const warningIcon = (
    <MaterialCommunityIcons name="alert" size={25} color={colors.redalert} />
  );

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View
          style={styles.modalContainer}
          accessible
          accessibilityViewIsModal
          accessibilityLabel="Warning Modal"
        >
          <Text style={styles.title}>Varning!</Text>

          <Text style={styles.message}>
            Gränsvärdesöverskridande klimatvärden
          </Text>
          <Text style={styles.message}>KONTROLLERA LAST</Text>

          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Close information popup"
            style={styles.closeButton}
          >
            <Text style={styles.dismiss}>DISMISS</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default WarningModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.redalert,
    borderRadius: 12,
    padding: 20,
    width: "95%",
    height: "95%",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "center",
  },
  title: {
    fontFamily: 'Figtree-Bold',
    fontSize: 50,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginBottom: 40,
  },
  closeButton: {
    padding: 20,
    backgroundColor: colors.white,
    marginTop: 60,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
  },
  dismiss: {
    color: colors.darkblue,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  message: {
    fontFamily: 'Figtree-Bold',
    fontSize: 20,
    color: colors.white,
    textAlign: "center",
    marginBottom: 20,
  },
});
