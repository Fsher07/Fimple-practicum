import React from 'react'
import { Context } from '../Context';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { NumericFormat } from 'react-number-format';




function PaymentCard() {
  const { entries } = useContext(Context);

  const { amount, interest_rate, kkdf_rate, bsmv_rate, interval, installments } = entries;
  //   // EMI = [P x R x (1+R) ^ N] / [(1+R) ^ (N-1)]
  //   // P = Principal Amount
  //   // R = Rate of Interest
  //   // N = Number of Installments
  //   // EMI = Equated Monthly Installment
  const rate = (interest_rate/100 + (kkdf_rate*interest_rate)/10000 + (bsmv_rate*interest_rate)/10000);
  const EMI = amount*((rate*((1+rate)**installments)) / (( ((1+ rate)**installments) - 1)));
  const totalPayment = (EMI*installments);


  return (
    <div className='credit-form paymentCard'>
      <div className='paymentColumn'>
        <div className='rowTitle'>Interest Rate</div>
        <p><strong>{interest_rate}%</strong></p>
      </div>
      <div className='paymentColumn'>
        <div className='rowTitle'>Monthly Payment</div>
        <p><strong>$<NumericFormat displayType="text" value={EMI.toFixed(2)} thousandSeparator={true} /></strong></p>
      </div>
      <div className='paymentColumn'>
        <div className='rowTitle'>Total Payment</div>
        <p><strong>$<NumericFormat displayType="text" value={totalPayment.toFixed(2)} thousandSeparator={true} /></strong></p>
      </div>
      <div className='paymentColumn'>
        <Button variant="outlined" size="medium" color="error">Payment Table</Button>
      </div>
    </div>
  )
}

export default PaymentCard