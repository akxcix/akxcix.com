import { Navbar } from '../lib/components/navbar/Navbar';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { presets } from '../lib/themes/presets';
import { Footer } from '../lib/components/footer/Footer';
import { Spacer } from '../lib/components/utils/Spacer';
import { Routes } from '../lib/routes/Routes';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Open Sans', sans-serif;
    }
  body {
    background-color: ${props => props.theme.background};
    margin: 0;
  }
`
const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledRoutes = styled(Routes)`
  padding: 0 calc(max(30px, 50% - 800px));
  background-color: ${props => props.theme.background};
`;

export function App() {
  const activeTheme = useSelector((state) => state.activeTheme.value);

  return (
    <div>
      <Router>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/7a4ff18e5b.js"
            crossorigin="anonymous">
          </script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
          </style>
        </Helmet>
        <ThemeProvider theme={presets[activeTheme]}>
          <GlobalStyle />
          <StyledPage>
            <Navbar />
            <StyledRoutes />
            <Spacer />
            <Footer />
          </StyledPage>
        </ThemeProvider>
      </Router>
    </div>
  )
}
