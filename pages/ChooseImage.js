import React from "react";
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';


function ChooseImage(props) {
  const onImageChoose = () => {
    document.getElementById("hidden-file-input").click();
  }
  const { onImageSelect } = props;
  return (
    <>
      <FAB style={styles.fab}
        icon="upload"
        onPress={onImageChoose}
      />
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onImageSelect}
        id="hidden-file-input"
        accept="image/*" />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,
  }
});

export default ChooseImage;