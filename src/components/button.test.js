import React from 'react'
import {render} from '@testing-library/react'
import Button from './button'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Button />)
    
    expect(asFragment(<Button />)).toMatchSnapshot()
   })