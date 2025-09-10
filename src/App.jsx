import React, {useState,useEffect} from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

    // ✅ Load from localStorage on mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  // ✅ Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Summary transactions={transactions}/>
      <TransactionForm setTransactions={setTransactions}/>
      <TransactionList transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default App;
