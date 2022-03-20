import { createSignal, createContext, useContext, mergeProps } from 'solid-js';
import { commonLight } from '@/theme/common';

const ThemeContext = createContext();

export function ThemeProvider(props) {
  props = mergeProps(commonLight, props);

  const [theme] = createSignal(props),
    store = [theme];

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useCounter() {
  return useContext(ThemeContext);
}
