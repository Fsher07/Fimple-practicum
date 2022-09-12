import React from 'react'
import { Context } from '../Context';
import { useContext } from 'react';



function PaymentCard() {
  const { entries } = useContext(Context);

  const { amount, interest_rate, kkdf_rate, bsmv_rate, interval, installments } = entries;
  //   // EMI = [P x R x (1+R) ^ N] / [(1+R) ^ (N-1)]
  //   // P = Principal Amount
  //   // R = Rate of Interest
  //   // N = Number of Installments
  //   // EMI = Equated Monthly Installment
  const rate = (interest_rate/100 + (kkdf_rate*interest_rate)/10000 + (bsmv_rate*interest_rate)/10000);
  const EMI = amount*((rate*((1+rate)**installments)) / (( ((1+ rate)**installments) - 1))).toFixed(2);
  const totalPayment = (EMI*installments).toFixed(2);


  return (
    <div className='credit-form'>
      <div>
        <div className='rowTitle'>Interest Rate</div>
        <div>{interest_rate}%</div>
      </div>
      <div>
        <div className='rowTitle'>Monthly Payment</div>
        <div>${EMI}</div>
      </div>
      <div>
        <div className='rowTitle'>Total Payment</div>
        <div>${totalPayment}</div>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default PaymentCard