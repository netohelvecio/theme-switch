import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePeristedState from './utils/usePeristedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum
        quibusdam itaque sunt quasi ipsa molestiae in, inventore veritatis hic
        dignissimos incidunt aperiam voluptates rem vel facere iure amet. Nam.
      </p>
    </ThemeProvider>
  );
}

export default App;
