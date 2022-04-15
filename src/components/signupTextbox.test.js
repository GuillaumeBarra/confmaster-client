import React from 'react'
import {render} from '@testing-library/react'
import SignupTextbox from './signupTextbox'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<SignupTextbox />)
    
    expect(asFragment(<SignupTextbox />)).toMatchSnapshot()
   })