import React from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Header from '../src/components/Header.jsx';
import About from '../src/components/About.jsx';
import Project from './components/Project.jsx';
// import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      {/* <Navbar /> */}
      <Header />
      <About />
      <Project />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello AIEcon Gulf 👋</h1>
//       <p>If you see this, React is working!</p>
//     </div>
//   );
// }

// export default App;
