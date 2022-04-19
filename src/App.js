
import React, {useState} from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 297.64,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 97.64,
    date: new Date(2021, 3, 5),
  },
  {
    id: "e3",
    title: "Bought a Tv",
    amount: 397.64,
    date: new Date(2021, 3, 10),
  },
  {
    id: "e4",
    title: "School Fees",
    amount: 597.64,
    date: new Date(2021, 4, 2),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
   setExpenses((prevExpenses => {
     return [expense, ...prevExpenses];
   }));
  };
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    
      
    </div>
  );

};
export default App;
