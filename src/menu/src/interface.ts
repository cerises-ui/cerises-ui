import { PropsWithChildren } from 'solid-js';

export type MenuProps = GlobalProps &
  PropsWithChildren & {
    type?: MenuType;
    /**
     * menu size
     * @default ""
     */
    size?: MenuSize;
    /**
     * disable the menu
     * @default false
     */
    disabled?: boolean;
  };

export type MenuType = 'horizontal' | 'vertical';

export type MenuSize = 'small' | 'mini' | 'normal' | 'large';
