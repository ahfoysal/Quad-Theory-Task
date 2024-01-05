"use client";

import { getErrorMessageByPropertyName } from "@/utils/SchemaValidator";
import { Input } from "@nextui-org/input";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  value?: string | number | string[] | undefined;
  placeholder?: string;
  validation?: object;
  id?: string;
}

const FormInput = ({
  name,
  type,
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
          <Input
            type={type}
            isInvalid={errorMessage ? true : false}
            label={label}
            errorMessage={errorMessage ? errorMessage : ""}
            size={size}
            placeholder={placeholder}
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

export default FormInput;
