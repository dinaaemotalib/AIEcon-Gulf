import React from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Header from '../src/components/Header.jsx';
import About from '../src/components/About.jsx';
import Project from './components/Project.jsx';

function App() {
  return (
    <div className="w-full overflow-hidden">
      {/* <Navbar /> */}
      <Header />
      <About />
      <Project />
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
