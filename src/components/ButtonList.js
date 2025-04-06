import React from 'react'
import Button from './Button'

const list = ['All', 'Music', 'Live', 'Gaming', 'Cricket', 'Coocking', 'Valentines', 'Movies', 'News', 'Software', 'AI', 'New to you']

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Music'/>
      <Button name='Live'/>
      <Button name='Gaming'/>
      <Button name='Cricket'/>
      <Button name='Coocking'/>
      <Button name='Valentines'/>
      <Button name='Movies'/>
      <Button name='News'/>
      <Button name='Software'/>
      <Button name='AI'/>
      <Button name='New to you'/>
    </div>
  )
}

export default ButtonList