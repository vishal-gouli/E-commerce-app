import React from 'react'
import style2 from "./Container.module.css"

const Container = () => {
  return (
    <div className={style2.body}>

        <div className={style2.container}>

        <div className={style2.container1}>

            <h1>AI Aayiz Packaging </h1>
            <h2>offers customized</h2>
            <h2>coffee Packaging</h2>
            <h2>solutions</h2>
            <p>specialization in paper cups , plastic cups , carry bags , food-grade boxes, coffee bean bags and shopping with various sizes and designs , United Arab Emirates</p>

        </div>

        <div className={style2.container2}>
                 <img src="https://media.istockphoto.com/id/621581680/photo/working-in-comfort-and-style.jpg?s=612x612&w=0&k=20&c=y5hFleSfIwK0KbuX3Cye3D7ZyN0wKW7DwCeDgopnw2w=" alt="" />
        </div>

        </div>
        <div className={style2.butttons}>

            <div className={style2.button}>
                 <h3>100+</h3>
                 <p>Paper Cup Design</p>
            </div>
            <div className={style2.button}>
                 <h3>110+</h3>
                 <p>carry Bag Design</p>
            </div>
            <div className={style2.button}>
                 <h3>120+</h3>
                 <p>Paper Bag Design</p>
            </div>
            <div className={style2.button}>
                 <h3>130+</h3>
                 <p>shop Bag Design</p>
            </div>

        </div>

    </div>
  )
}

export default Container