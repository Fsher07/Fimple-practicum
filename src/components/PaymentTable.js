import { tableBodyClasses } from '@mui/material'
import React from 'react'
import './PaymentTable.css'

function PaymentTable(props) {
  return (props.trigger) ? (
    <div className="payment-table">
      <table>
        <thead>
          <tr>
            <th>Payment</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>KKDF</th>
            <th>BSMV</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$1,000</td>
            <td>$1,000</td>
            <td>$1,000</td>
            <td>$1,000</td>
            <td>$1,000</td>
            <td>$1,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : "";
}

export default PaymentTable