import React from 'react'
import Sidebar from './Sidebar'


const Container = () => {
  return (
    <div className="grid h-screen place-items-center grid-cols-5">
      <div className='col-start-2'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Container