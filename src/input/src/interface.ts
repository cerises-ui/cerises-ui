import { PropsWithChildren } from 'solid-js';

export type Input = GlobalProps &
  PropsWithChildren & {
    type?: InputType;
    /**
     * menu size
     * @default ""
     */
    size?: InputSize;
    /**
     * disable the menu
     * @default false
     */
    disabled?: boolean;
  };

export type InputType = 'horizontal' | 'vertical';

export type InputSize = 'small' | 'mini' | 'normal' | 'large';
