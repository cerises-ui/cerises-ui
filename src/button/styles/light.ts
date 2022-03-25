import { commonLight } from '@/theme/common';

import CerisesTheme from '@/theme/common/cerises-ui';

const theme = {
  background: commonLight.baseColor,
  buttonTextColor: commonLight.textColorBase,
  buttonBorderColor: commonLight.borderColor,
  buttonBorderWidth: '1px',
  buttonBorderRadius: commonLight.borderRadius,

  primaryHover: CerisesTheme.primaryHover,
  primaryDefault: CerisesTheme.primaryDefault,
  primaryActive: CerisesTheme.primaryActive,
  primarySuppl: CerisesTheme.primarySuppl,

  infoColor: commonLight.infoColor,
  infoColorHover: commonLight.infoColorHover,
  infoColorActive: commonLight.infoColorPressed,
  infoColorSuppl: commonLight.infoColorSuppl,

  successColor: commonLight.successColor,
  successColorHover: commonLight.successColorHover,
  successColorActive: commonLight.successColorPressed,
  successColorSuppl: commonLight.successColorSuppl,

  warningColor: commonLight.warningColor,
  warningColorHover: commonLight.warningColorHover,
  warningColorActive: commonLight.warningColorPressed,
  warningColorSuppl: commonLight.warningColorSuppl,

  errorColor: commonLight.errorColor,
  errorColorHover: commonLight.errorColorHover,
  errorColorActive: commonLight.errorColorPressed,
  errorColorSuppl: commonLight.errorColorSuppl,
};

export default theme;
export type ThemeButtonVars = typeof theme;
