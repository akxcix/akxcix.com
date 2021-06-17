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
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
