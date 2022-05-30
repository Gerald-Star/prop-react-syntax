import React from 'react'
import './Contact.css'
// import Dan from '../images/dan-gold.jpg'
// // 'import Phone from '../images/phone.png'
// import Mail from '../images/mail.png'



// -create a ConstantSourceNode.js componenet
// - move one of the contact card divs below into that file
// - import and render 4 instances of that contact card
// -Think--what could be the problem with doing it like this

export default function Contact(props) {
  

  return (
      
          
           <div className='contacts contact-card'>
              <img src={props.img} alt="" />
              <h3>{props.name }</h3>

              <div className='info-group'>
                  
                  <img src='../images/phone.png' alt="phone" />
                  <p>{props.phone }</p>

              </div>

              <div className='info-group' >
                  <img src='../images/mail.png' alt="mail" />
                  <p>{props.email}</p>
              </div> 

           </div>
          

      
  )
}





