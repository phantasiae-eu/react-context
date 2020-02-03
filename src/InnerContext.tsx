import React, {useContext} from 'react'
import {MyContext} from './context'

const InnerContext:React.FC = ()=><div className='Inner'><p>{useContext(MyContext).title}</p></div>

export default InnerContext