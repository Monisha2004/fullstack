
import back from "../assets/images/aboutImage.jpg";
import ButtonAppBar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    const containerStyle = {
        padding: '50px',
        color: '#333',
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
       
      };
    

  const textStyle = {
    textAlign: 'left',
    marginRight:'600px',
    padding: '20px',
    borderRadius: '8px',
   
  };
  return (
    <div>
      <ButtonAppBar />
      <div style={containerStyle}>
        
          <div style={textStyle}>
            <h1 style={{ color: 'black',marginBottom:'60px' }}>WHO WE ARE</h1>
          
            <p>
              AGROFUNDX is Indias apex development bank, established in 1982 under an Act 
              of Parliament to promote sustainable and equitable agriculture and rural 
              development. In its journey of more than four decades, the premier development 
              financial institution has transformed lives in Indian villages through 
              agri-finance, infrastructure development, banking technology, promotion of microfinance and 
              rural entrepreneurship through SHGs & JLGs and more. It continues to aid in nation
              building through participative financial and non-financial interventions, 
              innovations, technology, and institutional development in rural areas.
            </p>
            <p>
              The knowledge of our asset managers and economists will satisfy even 
              the most demanding customer. Experienced specialists and partners with an impeccable 
              reputation help our clients achieve their goals, implement large infrastructure, 
              industrial and energy projects virtually anywhere in the world.
            </p>
          </div>
         
      
      </div>
      <Footer />
    </div>
  );
}

export default About;
