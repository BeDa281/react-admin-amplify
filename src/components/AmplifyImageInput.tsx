import React from "react";
import { ImageInput } from "react-admin";
import { useStorageInput } from "../hooks/useStorageInput";
import { AmplifyImageField } from "./AmplifyImageField";

type Props = {
  source: string;
  multiple?: boolean;
  options?: any;
  storageOptions?: any;
};

export const AmplifyImageInput: React.FC<Props> = ({
  options = {},
  storageOptions = {},
  ...props
}) => {
  const { onDropAccepted } = useStorageInput({
    source: props.source,
    multiple: props.multiple,
    onDropAcceptedCallback: options.onDropAccepted,
    storageOptions,
  });

  return (
    <ImageInput {...props} options={{ ...options, onDropAccepted }}>
      <AmplifyImageField />
    </ImageInput>
  );
};
