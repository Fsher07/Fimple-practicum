import React, { useState } from 'react'
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Context } from '../Context';
import './CreditForm.css'
import { Button, TextField, MenuItem } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import PaymentCard from './PaymentCard';

function CreditForm() {

  const [ row, setRow ] = useState(false);
  const { entries, setEntries } = useContext(Context);
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  
  const { amount } = entries;

  const intervals = [
    {
      value: 7,
      label: 'Weekly',
    },
    {
      value: 30,
      label: 'Monthly',
    },
    {
      value: 365,
      label: 'Yearly',
    },
  ];

  const onSubmit = (e) => {
    setEntries(e);
    console.log('mada:',  e);
    console.log(entries);
  }

  return (
    <>
    <img src="https://fimple.co.uk/wp-content/uploads/2020/09/Fimple_Logo-edited-logo-2.svg" alt="company logo" />
    <form className="creditForm-container" onSubmit={handleSubmit(onSubmit)}>
      <div className='credit-form'>
        <Controller
          name="amount"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name, ref} }) => (
            <NumericFormat
              label='Amount'
              inputRef={ref}
              error={!!errors.amount}
              name={name}
              value={value}
              customInput={TextField}
              isAllowed={(values) => {
                const { value } = values;
                return value <= 1000000;
              }}
              helperText={errors.bank_rate ? 'Bank Rate is required' : 'Maximum should be $1,000,000'}
              onValueChange={(values) => {
                const {floatValue} = values;
                onChange(floatValue);}}
              thousandSeparator={true}
              prefix={"$ "}
            />
          )}
        />

        <Controller
          name="interest_rate"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name} }) => (
            <NumericFormat
              label='Interest Rate'
              error={!!errors.bank_rate}
              name={name}
              value={value}
              customInput={TextField}
              isAllowed={(values) => {
                const { value } = values;
                return value < 99;
              }}
              onValueChange={(values) => {
                const {floatValue} = values;
                onChange(floatValue);}}
              helperText={errors.bank_rate ? 'Bank Rate is required' : 'Maximum should be 99%'}
              suffix={"%"}
            />
          )}
        />
        <Controller
          name="kkdf_rate"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name} }) => (
            <NumericFormat
              label='KKDF Rate'
              error={!!errors.kkdf_rate}
              name={name}
              value={value}
              customInput={TextField}
              isAllowed={(values) => {
                const { value } = values;
                return value >= 0 && value <= 15;
              }}
              onValueChange={(values) => {
                const {floatValue} = values;
                onChange(floatValue);}}
              helperText={errors.bank_rate ? 'Bank Rate is required' : 'Maximum should be 15%'}
              suffix={"%"}
            />
          )}
        />

        <Controller
          name="bsmv_rate"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name} }) => (
            <NumericFormat
              label='BSMV Rate'
              error={!!errors.bsmv_rate}
              name={name}
              value={value}
              customInput={TextField}
              isAllowed={(values) => {
                const { value } = values;
                return value >= 0 && value <= 10;
              }}
              onValueChange={(values) => {
                const {floatValue} = values;
                onChange(floatValue);}}
                helperText={errors.bank_rate ? 'Bank Rate is required' : 'Maximum should be 10%'}
              suffix={"%"}
            />
          )}
        />

        <TextField
          {...register("interval")}
          id="standard-select-currency"
          select
          label="Select"
          helperText="Select payment frequency"
          defaultValue={30}
        >
          {intervals.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* create a dropdown with Controller for number of installments */}
        <Controller
          name="installments"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name} }) => (
            <NumericFormat
              label='Number of Months'
              error={!!errors.installments}
              name={name}
              value={value}
              customInput={TextField}
              isAllowed={(values) => {
                const { value } = values;
                return value >= 0 && value <= 120;
              }}
              onValueChange={(values) => {
                const {floatValue} = values;
                onChange(floatValue);}}
              helperText={errors.bank_rate ? 'This field is required' : 'Maximum should be 120'}
            />
          )}
        />
      </div>
      <div className='formButton'>
        <Button type="submit" variant="contained" color="error" size="large" onClick={() => setRow(true)}>Submit</Button>
      </div>
    </form>
    <div className='paymentRow'>
      {amount && <PaymentCard />}
    </div>
    </>
  )
}

export default CreditForm