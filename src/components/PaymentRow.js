import React, { useContext } from 'react'
import { ContextEMI } from '../Context';
import { NumericFormat } from 'react-number-format';


function PaymentRow(props) {

  const { EMI } = useContext(ContextEMI);

  return (
    <tr>
      <td>{props.no}</td>
      <td>$<NumericFormat displayType="text" value={EMI.toFixed(2)} thousandSeparator={true} /></td>
      <td>$<NumericFormat displayType="text" value={props.payment.toFixed(2)} thousandSeparator={true} /></td>
      <td>$<NumericFormat displayType="text" value={props.balance.toFixed(2)} thousandSeparator={true} /></td>
      <td>$<NumericFormat displayType="text" value={props.interest.toFixed(2)} thousandSeparator={true} /></td>
      <td>$<NumericFormat displayType="text" value={props.kkdf.toFixed(2)} thousandSeparator={true} /></td>
      <td>$<NumericFormat displayType="text" value={props.bsmv.toFixed(2)} thousandSeparator={true} /></td>
    </tr>
  )
}

export default PaymentRow