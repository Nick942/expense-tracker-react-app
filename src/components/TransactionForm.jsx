import React, { useState } from "react";

function TransactionForm({ setTransactions }) {
  // local state for inputs
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!date || !description || !category || !amount || Number(amount) <= 0) {
      alert("Please fill all fields with valid values.");
      return;
    }

    // new transaction object
    const newTransaction = {
      id: Date.now(),
      date,
      description,
      category,
      amount: Number(amount),
      type,
    };

    // update state in App.js
    setTransactions((prev) => [...prev, newTransaction]);

    // clear form fields
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
    setType("income");
  };

  return (
    <div className="transaction-form">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
