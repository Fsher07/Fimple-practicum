import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../Context';
import './CreditForm.css'

function CreditForm() {

  const { entries, setEntries } = useContext(Context);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    setEntries(e);
    console.log(e);
    console.log(entries);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register('principal')} placeholder='Principal' inputMode='numeric'/>
      <input type="number" {...register('installment')} placeholder='Installment'/>
      <label>Installment Interval</label>
      <select value={30} {...register('interval')} >
        <option value={7}>Weekly</option>
        <option value={30}>Monthly</option>
        <option value={365}>Annual</option>
      </select>
      <input type="number" {...register('bsmv tax')} placeholder='bsmv tax'/>
      <input type="number" {...register('kkdf tax')} placeholder='kkdf tax'/>
      <input type="submit" />
    </form>
  )
}

export default CreditForm