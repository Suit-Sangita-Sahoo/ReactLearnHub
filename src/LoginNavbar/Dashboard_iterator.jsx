import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard_iterator = ({list}) => {
  return (
    <div>
        {
            list.map((ele,index)=>{
                return(
                    <li key={index} className='flex'>
                        <Link to={`/dashboard/${ele}`}>{ele}</Link>
                    </li>
                )
            })
        }
      
    </div>
  )
}

export default Dashboard_iterator
