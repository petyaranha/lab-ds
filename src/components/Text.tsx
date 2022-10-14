import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'small' | 'medium' | 'large',
  asChild?: boolean,
  children: ReactNode
}

export function Text({ size = 'medium', asChild, children }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-200 font-sans',
        {
          'text-xs': size === 'small',
          'text-sm': size === 'medium',
          'text-md': size === 'large',
        }
      )}
    >
      {children}
    </Comp>
  )
}
// xxxxximport {InputHTMLAttributes, ReactNode} from 'react';

// export interface TextInputRootProps {
//     children: ReactNode;
// }

// function TextInputRoot(props: TextInputRootProps) {
//     return(
//         <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full outline-none focus:ring-2 ring-cyan-300">
//            {props.children}
//         </div>
//     )
// }

// //function TextInputIcon() {}

// export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


// function TextInputInput(props : TextInputInputProps){
//     return(
//        <input 
//          className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 "
//              {...props}
//         />
//  )
// }

// export const TextInput = {
//     Root: TextInputRoot,
//     Input: TextInputInput,
//     //Text: TextInputIcon,
// }