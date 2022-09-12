import React from "react";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { TextField } from '@mui/material';

export default function Try() {

  const { handleSubmit, control } = useForm();
  const onSubmit = (e) => console.log(e);
  return (
    <div className="mada">
      <h3>react-hook-form + react-number-format + Material UI</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange, value, name} }) => (
            <NumericFormat
              label='kral'
              name={name}
              value={value}
              customInput={TextField}
              onValueChange={(values) => onChange(values.value)}
              thousandSeparator={true}
              prefix={"$ "}
            />
          )}
        />
        <input type="submit" />
      </form>
    </div>
  );
}