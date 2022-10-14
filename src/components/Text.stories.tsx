import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'medium'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'small'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'large'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
// xxxxxxxxxxxxximport {Meta,StoryObj} from '@storybook/react';
// import {Text, TextProps} from './Text';

// export default { //sempre esportar como default
//     title: 'Components/Text', //titulo da documentação
//     component: Text, //componente que estou exportando
//     args: {
//         children: 'Lorem ipsum.',
//         size: 'md',
//     },
//     argsTypes: {
//         size: {
//             options: ['sm', 'md', 'lg'],
//             control: {
//               type: 'inline-radio'
//             }
//         }
//     },
// } as Meta<TextProps>

// //para corrigir o erro no storybook.
// //precisa exportar pelo menos uma variante: que não está como default
// export const Default: StoryObj<TextProps> = {}

// export const Small: StoryObj<TextProps> = {
//     args: {
//         size: 'sm'
//     }
// }

// export const Large: StoryObj<TextProps> = {
//     args: {
//         size: 'lg'
//     }
// }


// export const CustomComponent: StoryObj<TextProps> = {
//     args:{
//         asChild: true,
//         children: (
//             <p>Testando</p>
//         )
//     },
//     argTypes: {
//       children: {
//         table: {
//             disable: true,
//         }
//     },
//         asChild: {
//             table:{
//                 disable: true,
//             }
//       }
//     }
// }
