"use client";

import { getErrorMessageByPropertyName } from "@/utils/SchemaValidator";
import { Checkbox } from "@nextui-org/checkbox";
// import { Input, Select, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type IOptions = {
  value: string;
  label: string;
};

type ISelect = {
  name: string;

  label?: string;
  size?: "large" | "small";
  value?: string | number | string[] | undefined;
  options?: IOptions[];
  defaultValue?: string;
};

const FormCheckBox = ({
  name,
  defaultValue,
  size,
  value,
  label,
  options,
}: ISelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue || ""}
        name={name}
        render={({ field: { value, onChange } }) => (
          // <Select
          //   defaultValue={defaultValue || ""}
          //   style={{ width: "100%" }}
          //   value={value}
          //   status={errorMessage ? "error" : ""}
          //   onChange={onChange}
          //   options={options}
          //   size={size}
          // />
          <Checkbox onChange={onChange} value={value} defaultSelected>
            {label}
          </Checkbox>
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

export default FormCheckBox;
