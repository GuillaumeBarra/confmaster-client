import React from 'react'
import {render} from '@testing-library/react'
import Conferences from './conferences'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Conferences />)
    
    expect(asFragment(<Conferences />)).toMatchSnapshot()
   })
