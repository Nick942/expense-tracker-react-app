import React from "react";

function Summary({transactions}) {
  const income=transactions.filter((t)=>t.type==="income").reduce((acc,cur)=>acc+Number(cur.amount),0);
  const expense=transactions.filter((t)=>t.type==="expense").reduce((acc,cur)=>acc+Number(cur.amount),0);
  const balance=income-expense;
  return (
    <>
      <div className="balance">
        <h2>Net Balance: R.{balance.toFixed(2)}</h2>
      </div>
      <div className="summary">
        <div className="income-box">
          <h3>Total Income</h3>
          <p>R.{income.toFixed(2)}</p>
        </div>
        <div className="expense-box">
          <h3>Total Expenses</h3>
          <p>R.{expense.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default Summary;
