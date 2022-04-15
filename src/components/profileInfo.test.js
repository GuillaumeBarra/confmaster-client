import React from 'react'
import {render} from '@testing-library/react'
import ProfileInfo from './profileInfo'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<ProfileInfo />)
    
    expect(asFragment(<ProfileInfo />)).toMatchSnapshot()
   })