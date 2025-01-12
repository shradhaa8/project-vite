import React, { useState } from 'react'
import image from "../assets/images/image.jpg"
import iphone from "../assets/images/iphone.jpg"
import Banner from './Banner'
import About from './About'
import Footer from './Footer'


const Home = () => {
  
//   const [text, setText]=useState("")
  
//   const[alert, setAlert]=useState(null)
  
//   const showAlert=(type, message)=>{
//     setAlert({
//       type: type, 
//       message: message
      
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 3000);
//   }


//   const handleUpperCase=()=>{
//     console.log("you clicked uppercase");
//     setText(text.toUpperCase())
//     showAlert('success','Text changed to Upper Case')
    

//   }
//   const handleLowerCase=()=>{
//     console.log("lower case");
//     setText(text.toLowerCase())
//     showAlert('success','Text changed to Lower Case')
//   }
//   const handleClearTextArea=()=>{
//     setText('')
//     showAlert('success','Text cleared')
//   }
//   const handleCopyText = () => {
//     navigator.clipboard.writeText(text).then(() => {
//       showAlert('success', 'Text copied');
//     })
//   }
//   const handleChange=(e)=>{
//     e.preventDefault()
//     setText(e.target.value)
//   } 
//   return (
//     <div>
   
//     {alert && (
//         <div className={`alert alert-${alert.type} alert-dismissible fade show container`} role="alert">
//           {alert.message}
//           <button type="button" className="btn-close" aria-label="Close"></button>
//       </div>
//     )}
//     <div>
// <div className="mb-3 container">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//   <textarea className="form-control" value={text} name={text} onChange={handleChange} placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea> 
  
//   <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>UpperCase</button>
//   <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>LowerCase</button>
//   <button className='btn btn-primary mt-3 mx-2' onClick={handleClearTextArea}>Clear Text</button>
//   <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyText}>Copy Text</button>
// </div>
// <div className='container'>
//   <h4>Analyze your text</h4>
//   <p>{text.split(' ').length} words and {text.length} character</p>
//   <p>{0.008 * text.split(' ').length} average time to read</p>
//   <h4>preview text</h4>
//   <p>{text.length>0?text:"no preview to display"}</p>
// </div>
// </div>
//     </div>
//   )
 
return(
  <div>
    <Banner/>
    <About/>
    
  </div>
)

 
}

export default Home
