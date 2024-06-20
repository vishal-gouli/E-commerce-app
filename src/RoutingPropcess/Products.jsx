import React, { useRef, useState } from 'react'
import style9 from './Product.module.css'
import products from './cards'

const Products = () => {
let [state1,setState1] = useState("");

  let inpref = useRef();

  let changing = (e)=>{
    let inpData = e.target.value;
        
        setState1(inpData);
  }
  
  return (
    <section className={style9.section1}>
        <section className={style9.section2}>

        <section className={style9.sectionA}>
          <div className={style9.logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLe5uGfg5KyWV4U8ApEZ6nWv3W-jf8jwf8Q&s" alt="" />
          </div>
          <div className={style9.content}>
                   <input type="text" placeholder='Search for the product' ref={inpref} onChange={changing}/>
          </div>
        
    </section>

    <section className={style9.sectionB}>
    
    {
       products.filter((item)=>{
        if(state1 == ""){
          return item;
        }else if(item.name.toLowerCase().includes(state1.toLowerCase())){
          return item;
        }
      }).map((item,index)=>{
        return (
          <div className={style9.card} key={index}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
        )
      })
    }

    </section>
      </section>
    </section>
  )
}

export default Products