import React from 'react'
import {render} from '@testing-library/react'
import ModalTextbox from './modalTextbox'
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<ModalTextbox />)
    
    expect(asFragment(<ModalTextbox />)).toMatchSnapshot()
   })