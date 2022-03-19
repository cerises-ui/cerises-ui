type ButtonProps = {
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
   * @default ""
   */
  icon?: IconName;
  onClick?: ButtonOnClickHandler;
};

type ButtonType =
  | 'primary'
  | 'text'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

type ButtonSize = 'small' | 'mini';

type ButtonOnClickHandler = (event: MouseEvent) => void;

type IconName = 'edit' | 'share' | 'delete' | 'search' | 'arrow-left';
