import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp 
      className={clsx(
        'text-gray-100 font-bold font-sans', 
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
// import { Slot } from '@radix-ui/react-slot';
// import { clsx } from 'clsx'
// import { ReactNode } from 'react';

// export interface HeadingProps {
//   size?: 'small' | 'medium' | 'large',
//   asChild?: boolean,
//   children: ReactNode
// }

// export function Heading({ size = 'medium', asChild, children }: HeadingProps) {
//   const Comp = asChild ? Slot : 'h2'

//   return (
//     <Comp
//       className={clsx(
//         'text-gray-200 font-bold font-sans',
//         {
//           'text-lg': size === 'small',
//           'text-xl': size === 'medium',
//           'text-2xl': size === 'large',
//         }
//       )}
//     >
//       {children}
//     </Comp>
//   )
// }