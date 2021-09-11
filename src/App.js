import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.7,
      date: new Date(2021, 5, 12),
    },
    {
      title: "SuperMarket",
      amount: 94.7,
      date: new Date(2020, 3, 12),
    },
    {
      title: "Books",
      amount: 694.7,
      date: new Date(2021, 7, 10),
    },
    {
      title: "Candys",
      amount: 4.7,
      date: new Date(2021, 1, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses}>
        </Expenses>
    </div>
  );
}

export default App;
