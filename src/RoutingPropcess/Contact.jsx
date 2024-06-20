import React from 'react'
import style12 from './Contact.module.css'
import {useState} from 'react'
import axios from 'axios'
import { FaMobileScreen } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

axios.defaults.baseURL = "http://localhost:9000/"

export const Contact = () => {


let [toggle , setToggle] = useState(true);
let [getdata,setGetdata] = useState(false)
let [getbackenddata,setbackenddata] = useState([])


let  [formData ,setFormData] = useState({
  name:"",
  email:"",
  mobile:""
})

let handleonchange =(event)=>{
    let {name,value} = event.target;
    setFormData({...formData , [name]:value})
}

let handlesubmit =async(e)=>{
   e.preventDefault();
   let data = await axios.post("/create", formData)
    console.log(data)
    setFormData({ name:"",
    email:"",
    mobile:""})
}

let getfetcheddata =async(e)=>{
  e.preventDefault();
  let data = await axios.get("/")
  let gotbackenddata = data.data.data;
   setbackenddata(gotbackenddata)
   setToggle(false)
  setGetdata(true)
// console.log(getbackenddata);

}

let clickingbtns = ()=>{
  setToggle(true)
  setGetdata(false)

}

  return (
    <section className={style12.section1}>
          <section className={style12.section2}>
                 
          <section className={style12.sectionA}>
            <h1>Get Touch With Us</h1>
            <p>Contact</p>
         
         </section>
         <section className={style12.sectionB}>
          <section className={style12.sectionB1}>
          <div className={style12.container}>
      <div  className={style12.section11}>

      <div  className={style12.sectiona}>

          <button className={style12.greenbtn} onClick={clickingbtns}>Add New Dealer</button>
          <button className={style12.redbtn} onClick={getfetcheddata}>List of Dealer`s</button>

      </div>

     {toggle && 

      <div  className={style12.sectionb} >
        <form >
          <input type="text" placeholder="Username" name="name"   onChange={handleonchange} />
          <input type="text" placeholder="useremail" name="email"  onChange={handleonchange} />
          <input type="text" placeholder="age" name="mobile"  onChange={handleonchange} />
          <button onClick={handlesubmit} >Submit</button>
        </form>
      </div>

}


{getdata &&

<div  className={style12.sectionb} >
  {getbackenddata.map((e)=>{
     return(
  <div className={style12.sectionba}>
      <h1>{e.name}</h1>
   {/* <h1>{e.email}</h1>
   <h1>{e.mobile}</h1> */}

   </div>
     )
})}
</div>
} 

      </div>
          
    </div>
          </section>
          <section className={style12.sectionB2}>
            <div className={style12.mapdesign}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.292480079844!2d77.56061647411887!3d12.888905116687868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151f1d485609%3A0x128233fc8d0b7aa4!2sForum%20South%20Bengaluru!5e0!3m2!1sen!2sin!4v1716963500264!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </section>
         </section>

         {/* <section className={style12.sectionB2}>
            
            </section> */}
         <section className={style12.sectionC}>
              <div className={style12.adress}>
                <div className={style12.adresscard1}>
                <FaMobileScreen className={style12.iconssize}/>
                  <h4>Telephone</h4>
                  <h5>91+ 637286577</h5>
                </div>
                <div className={style12.adresscard2}>
                <IoLocation className={style12.iconssize}/>
                <h4>our location</h4>
                <h5>basavanagudi banglore</h5>
                </div>
                <div className={style12.adresscard3}>
                <MdMarkEmailUnread className={style12.iconssize}/>
                  <h4>Send Email</h4>
                  <h5>basavaytm@gmail.com</h5>
                  
                </div>
              </div>
         </section>
         <section className={style12.sectionD}>
         <h1>@ 2024 All Rights Reserved</h1>
         </section>
         </section>
    </section>
  )
}

