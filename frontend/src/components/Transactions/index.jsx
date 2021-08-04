import './style.css';
import React, { useEffect, useState } from 'react';

import Transaction from '../Transaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <table>
      <thead>
        <th>Data</th>
        <th>Descrição</th>
        <th>Valor</th>
        <th>Tipo</th>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            transaction={transaction}
            className={transaction.type}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
