import React from 'react'
import './App.css';
import InnerContext from './InnerContext'

const OuterContext:React.FC = ()=><div className="Outer"><InnerContext/></div>

export default OuterContext