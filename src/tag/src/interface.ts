export type ButtonProps = {
  /**
   * button type
   * @default "default"
   */
  type?: ButtonType;
  /**
   * button size
   * @default ""
   */
  size?: ButtonSize;
  /**
   * disable the button
   * @default false
   */
  disabled?: boolean;
  /**
   * determine whether it's loading
   * @default false
   */
  loading?: boolean;
  /**
   * determine whether it's a plain button,
   * @default false
   */
  plain?: boolean;
  /**
   * determine whether it's a plain button, TODOs: 翻译
   * @default ""
   */
  background?: string;
  /**
   * determine whether it's a plain button, TODOs: 翻译
   * @default ""
   */
  color?: string;
  /**
   * @default ""
   */
  icon?: IconName;
  onClick?: ButtonOnClickHandler;
};

export type ButtonType =
  | 'primary'
  | 'text'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ButtonSize = 'small' | 'mini';

export type ButtonOnClickHandler = (event: MouseEvent) => void;

export type IconName = 'edit' | 'share' | 'delete' | 'search' | 'arrow-left';
