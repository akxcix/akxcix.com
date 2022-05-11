import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Theme from '../../common/Theme';
import Home from '../Pages/Home/Home';
import { Spacer } from '../Layout/Spacer/Spacer';

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

function App() {
  return (
    <div className="wrapper" style={styles.body}>
      <div className="page" style={styles.page as React.CSSProperties}>
        <Navbar/>
        <Home/>
        <Spacer/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
