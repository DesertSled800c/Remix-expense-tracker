import { Outlet } from "@remix-run/react";
import expensesStyle from "~/styles/expenses.css";
import ExpensesList from "~/components/expenses/ExpensesList";

export default function Expenses() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyle }];
}

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 20.99,
    date: new Date().toISOString(),
  },
];
