import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar/Navbar';
import PageNotFound from './Components/Common/PageNotFound/PageNotFound';
import CapitalCallsList from './Components/CapitalCalls/CapitalCallsList';
import InvestorsList from './Components/Investors/InvestorsList';
import BillsList from './Components/Bills/BillsList';
import CreateCapitalCallForm from './Components/CapitalCalls/CreateCapitalCallForm';
import { CreateInvestorForm } from './Components/Investors/CreateInvestorForm';
import { CreateBillForm } from './Components/Bills/CreateBillForm';
import InvestorDetail from './Components/Investors/InvestorDetail';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/capital-calls/:id" element={<CapitalCallDetail />} /> */}
          <Route path="/capital-calls" element={<CapitalCallsList />} />
          <Route path="/capital-calls/create-capital-call" element={<CreateCapitalCallForm/>} />
          <Route path="/bills" element={<BillsList />} />
          <Route path="/bills/create-bill" element={<CreateBillForm/>} />
          <Route path="/investors" element={<InvestorsList />} />
          <Route path="/investors/:id" element={<InvestorDetail />} />

          <Route path="/investors/create-investor" element={<CreateInvestorForm/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;