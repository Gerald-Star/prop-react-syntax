import React from 'react'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className='contacts'>
      <Contact
        img='./images/dan-gold.jpg'
        name='Mr. Dan Gold'
        phone='(211) 555-2221'
        email='mr. whiskaz@catnap.meow'
        
      />
      <Contact
        img='./images/hadian.jpg'
        name='Mrs. Hadian'
        phone='(222) 555-2222'
        email='mr.hadian@catnap.meow'
      />
      <Contact
        img='./images/paul-hanaoka.jpg'
        name='Mr. Paul Hanaoka'
        phone='(223) 555-2223'
        email='mr.paul@catnap.meow'
       
      />
      <Contact
        img='./images/tucker.jpg'
        name='Mr. Tucker'
        phone='(224) 555-2224'
        email='mr.tucker@catnap.meow'
       
      
      />

    </div>
  )
}

