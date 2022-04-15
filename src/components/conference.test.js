import React from 'react'
import {render} from '@testing-library/react'
import Conference from './conference'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Conference />)
    
    expect(asFragment(<Conference />)).toMatchSnapshot()
   })