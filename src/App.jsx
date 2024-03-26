import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from "@mui/material";
/**
 * 
 * @return {ReactElement} 
 */
function App() {
  const portfolioTheme = createTheme({
    typography: {
      fontFamily: ['Oswald', 'sans-serif'].join(',')
    },
    palette: {
      background: {
        default: '#212529' // change this to your desired color
      },
      text: {
        primary: '#7ae582'
      }
    }
  });

    // Apply the background color to the body of the document
  document.body.style.backgroundColor = portfolioTheme.palette.background.default
  return (
    <ThemeProvider theme={portfolioTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
