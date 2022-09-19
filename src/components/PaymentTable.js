import React, { useContext, forwardRef, useImperativeHandle, useState } from 'react'
import PaymentRow from './PaymentRow';
import { Context, ContextEMI } from '../Context';
import './PaymentTable.css'

function PaymentTable(props, ref) {

  const { entries } = useContext(Context);

  const [ trigger, setTrigger ] = useState('');

  const { EMI, tableSwitcher, setTableSwitcher } = useContext(ContextEMI); // tableData from PaymentCard.js

  const { amount, interest_rate, kkdf_rate, bsmv_rate, interval, installments } = entries;

  const rows = []; //empty array to add table rows in for loop

  let balance = amount;
  let interest = 0;
  let kkdf = 0;
  let bsmv = 0;
  let payment = 0;

  const compoundInterestCalculation = () => {

    for (let i = 1; i <= installments; i++) {
      interest = (balance*((1+interest_rate/100)**(interval/30))-balance);
      kkdf = interest * (kkdf_rate/100);
      bsmv = interest * (bsmv_rate/100);
      payment = EMI - interest - kkdf - bsmv;
      balance = balance - payment;
      rows.push(<PaymentRow key={i} no={i} interest={interest} kkdf={kkdf} bsmv={bsmv} payment={payment} balance={balance} />);
    }

    return rows;
  };

  const simpleInterest = () => {

    for (let i = 1; i <= installments; i++) {
      interest = (balance*interest_rate/100*(interval/30));
      kkdf = interest * (kkdf_rate/100);
      bsmv = interest * (bsmv_rate/100);
      payment = EMI - interest - kkdf - bsmv;
      balance = balance - payment;
      rows.push(<PaymentRow key={i} no={i} interest={interest} kkdf={kkdf} bsmv={bsmv} payment={payment} balance={balance} />);
    }

    return rows;
  };

  const interestCompound = () => {
    setTrigger('compound');
  };

  const interestSimple = () => {
    setTrigger('simple');
  };

  useImperativeHandle(ref, () => ({
    interestCompound,
    interestSimple,
  }), []);

  return (tableSwitcher) ? (
    <div className="payment-table">
      <button className='closeBtn' onClick={() => setTableSwitcher(false)}>X</button>
      <table>
        <thead>
          <tr>
            <th>Installment No</th>
            <th>Payment</th>
            <th>Principal</th>
            <th>Balance</th>
            <th>Interest</th>
            <th>KKDF</th>
            <th>BSMV</th>
          </tr>
        </thead>
        <tbody>
          { (trigger === 'compound') ? compoundInterestCalculation().map(row => row) : simpleInterest().map(row => row) }
        </tbody>
      </table>
    </div>
  ) : "";
}

export default forwardRef(PaymentTable)