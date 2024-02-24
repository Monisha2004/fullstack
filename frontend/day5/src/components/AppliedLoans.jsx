import { useState } from 'react';
import '../assets/css/AppliedLoans.css';
import AdminAppBar from './AdminHomeNavbar';
import Footer from './Footer';

const AppliedLoans = () => {
  const cardsData = [
    { name: 'Applicant Name : Suhaas', id: 'Application Loan Id : 4829274', phone: 'Applicant Phone No : 9080847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 400000' },
    { name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 800000' },
    { name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 100000' },
    { name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 800000' },
    { name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 100000' },
    { name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 800000' },
    { name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 100000' },
    { name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 800000' },
    { name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433', address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com', loan: 'Loan Amount : 100000' },
   
  ];

  const [isApprove, setisApprove] = useState(false);
  const [idx, setidx] = useState('');

  const handleChange = () => {
    setisApprove(true);
  };

  const handleChangeIdx = (id) => {
    setidx(id);
  };

  const handleChangeInv = () => {
    setisApprove(false);
  };

  const handleChangeIdxInv = (id) => {
    setidx(id);
  };

  localStorage.setItem("idx", idx);
  localStorage.setItem("Approve", isApprove);

  return (
    <div>
      <AdminAppBar />
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Applied Loans</h1>
      <div className="card-grids">
        {cardsData.map((card, index) => (
          <div key={index} className="cards">
            <p className="card-title">{card.name}</p>
            <p className="card-title">{card.id}</p>
            <p className="card-title">{card.phone}</p>
            <p className="card-title">{card.address}</p>
            <p className="card-title">{card.email}</p>
            <p className="card-title">{card.loan}</p>
            <div className="button-groups">
              <button style={{ color: "white", backgroundColor: "green", borderRadius: "6px", borderColor: "green",padding:'5px' }} onClick={() => { handleChange(); handleChangeIdx(card.id); }}>Approve for Loan</button>
              <button style={{ color: "white", backgroundColor: "red", borderRadius: "6px", borderColor: "red",padding:'5px'  }} onClick={() => { handleChangeInv(); handleChangeIdxInv(card.id); }}>Reject</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AppliedLoans;
