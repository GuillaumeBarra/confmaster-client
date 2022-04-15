import React from 'react'
import {render} from '@testing-library/react'
import Task from './task'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Task />)
    
    expect(asFragment(<Task />)).toMatchSnapshot()
   })