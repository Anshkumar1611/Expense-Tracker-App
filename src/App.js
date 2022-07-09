import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionLIst from './components/TransactionLIst';
import AddTransaction from './components/AddTransaction';
import { Globalprovider } from './context/GlobalState';

function App() {
  return (
    <Globalprovider>
     <Header />
     <div class="container">
      <Balance />
      <IncomeExpenses />
      <TransactionLIst />
      <AddTransaction/>
     </div>
    </Globalprovider>
  );
}

export default App;
