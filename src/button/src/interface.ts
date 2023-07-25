import { JSX } from 'solid-js';
import { ThemeButtonVars } from '../styles/light';

export type ButtonProps = GlobalProps &
  JSX.HTMLAttributes<HTMLButtonElement> & {
    theme?: ThemeButtonVars;
    /**
     * 按钮类型 button type
     * @default "default"
     */
    type?: ButtonType;
    /**
     * 按钮大小 button size
     * @default ""
     */
    size?: ButtonSize;
    /**
     * 是否禁用 disable the button
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
  | 'error'
  | 'info';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonOnClickHandler = (event: MouseEvent) => void;

export type IconName = 'edit' | 'share' | 'delete' | 'search' | 'arrow-left';
