"use client";

import { getErrorMessageByPropertyName } from "@/utils/SchemaValidator";
import { Textarea } from "@nextui-org/input";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  size?: "lg" | "md";
  value?: string | number | string[] | undefined;
  placeholder?: string;
  validation?: object;
  id?: string;
}

const FormTextArea = ({
  name,

  size,
  value,
  label,
  placeholder,
  validation,
  id,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Textarea
            size={size}
            isInvalid={errorMessage ? true : false}
            errorMessage={errorMessage ? errorMessage : ""}
            placeholder={placeholder}
            label={label}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
      {/* {errorMessage && (
        <Typography.Paragraph type="danger">
          {errorMessage}
        </Typography.Paragraph>
      )} */}
    </>
  );
};

export default FormTextArea;
