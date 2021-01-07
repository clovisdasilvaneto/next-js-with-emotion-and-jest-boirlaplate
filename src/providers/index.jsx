import {ThemeProvider} from '@emotion/react';
import theme from 'src/theme';

const Providers = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers;
