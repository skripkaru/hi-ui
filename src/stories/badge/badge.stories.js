import { createBadge as Badge } from './badge'
import './badge.scss'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['circle', 'square', 'rounded'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
  args: {
    size: 'medium',
    label: 'new'
  }
}

export const Rounded = {
  args: {
    variant: 'rounded'
  }
}
export const Square = {
  args: {
    variant: 'square'
  }
}
export const Circle = {
  args: {
    variant: 'circle'
  }
}
