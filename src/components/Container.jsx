import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'


const Container = () => {
  return (
    <div className="grid h-screen place-content-center grid-cols-5 gap-4">
      <div/>
      <div className='place-items-center'><Sidebar /></div>
      <div className='col-span-2'>
        <Content />
      </div>
      <div></div>
    </div>
  )
}

export default Container