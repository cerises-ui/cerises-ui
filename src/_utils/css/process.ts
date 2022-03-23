// 废弃：对运行时造成影响
export const processCssVars = (theme: Theme) => {
  Object.entries(theme.styles).map(([key, value]) => {
    if (typeof value === 'object') {
      return processCssVars(value[key]);
    } else {
      // TODOs 小驼峰转蛇形
      const cssVar = `--cerises-ui-${key}`;
      const cssVarValue = theme[key];
      if (typeof cssVarValue === 'string') {
        document.documentElement.style.setProperty(cssVar, cssVarValue);
      } else {
        document.documentElement.style.setProperty(
          cssVar,
          cssVarValue.toString(),
        );
      }
    }
  });
};
