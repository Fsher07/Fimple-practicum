import React, { useEffect } from 'react'
import { Context } from '../Context';
import { useContext } from 'react';



function PaymentCard() {
  const { entries, setEntries } = useContext(Context);

  const { amount, bank_rate, kkdf_rate, bsmv_rate, interval } = entries;
  useEffect(() => {

  }, [entries]);

  return (
    <div className='credit-form'>
      
    </div>
  )
}

export default PaymentCard