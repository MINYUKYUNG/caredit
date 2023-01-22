import { ThemeProvider } from 'styled-components';
import RouterView from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterView />
    </ThemeProvider>
  );
}

export default App;
