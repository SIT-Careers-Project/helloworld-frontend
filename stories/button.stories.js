import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@material-ui/core'

export default { title: 'Button' }

export const withText = () => <Button variant="contained" color="secondary" onClick={action('clicked')}>Hello Button</Button>

export const withSomeEmoji = () => (
  <Button variant="contained" color="secondary" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
