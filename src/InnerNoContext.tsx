import React from 'react'
import {Props} from './props'
import './App.css';

const InnerNoContext:React.FC<Props> = ({title})=><div className={'Inner'}><p>{title}</p></div>

export default InnerNoContext