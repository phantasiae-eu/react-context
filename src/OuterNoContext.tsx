import React from 'react'
import {Props} from './props'
import './App.css';
import InnerNoContext from './InnerNoContext'


const OuterNoContext:React.FC<Props>  = (props)=><div className="Outer"><InnerNoContext {...props}/></div>

export default OuterNoContext