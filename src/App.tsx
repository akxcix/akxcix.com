import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Theme from './components/Theme/Theme';
import { Spacer } from './components/Layout/Spacer/Spacer';
import { Router } from './pages/Router';

const styles = {
  body: {
    backgroundColor: Theme.dark.background,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  }
}

const App = () => {
  return (
    <div className="wrapper" style={styles.body}>
      <div className="page" style={styles.page as React.CSSProperties}>
        <Navbar className='navbar'/>
        <Router />
        <Spacer className='spacer'/>
        <Footer className='footer'/>
      </div>
    </div>
  );
}

export default App;