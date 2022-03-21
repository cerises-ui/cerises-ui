import { createSignal, createContext, useContext, mergeProps } from 'solid-js';
import { commonLight } from '@/theme/common';

const ThemeContext = createContext();

export function ThemeProvider(props) {
  // 覆盖主题
  props = mergeProps(commonLight, props);

  const [theme] = createSignal(props),
    store = [theme];

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
