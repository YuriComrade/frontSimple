import { TextInput } from "react-native-paper";
import { secondaryColor } from "../config/colors";

export const Input = (props) => {
  const { label, icon, type, value } = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => setText(text)}
      style={{}}
      mode="outlined"
      activeOutlineColor={secondaryColor}
      left={<TextInput.Icon icon={icon} />}
      keyboardType={type}
    />
  );
};
