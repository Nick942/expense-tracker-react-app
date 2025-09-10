import React from "react";

function TransactionList({transactions,setTransactions}) {
  function handleDelete(id){
    setTransactions(
      (prevValue)=>prevValue.filter((t)=>t.id!==id)
    );
  }
    
  return (
    <div className="transaction-history">
      <h3>Transactions</h3>
      <ul>
      { 
        transactions.map((t)=>(             
        <li key={t.id} className={t.type}>
          <span>{t.date}-{t.description} ({t.category})</span>
          <span>{t.amount} 
          <button className="delete-btn" onClick={()=>handleDelete(t.id)}>❌</button></span>
        </li>
        ))
      }
      </ul>
    </div>
  );
}

export default TransactionList;
