import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionLIst() {
  const {transactions}=useContext(GlobalContext);
  return (
    <>
    <h3>History</h3>
      <ul className="list">
      {transactions.map((transaction)=>
<Transaction key={transaction.id} {...transaction}/>
      )}
         
      </ul>

    </>
  )
}

export default TransactionLIst