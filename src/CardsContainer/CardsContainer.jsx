import React from 'react'
import style3 from './CardsContainer.module.css'

const CardsContainer = () => {
  return (
    <section className={style3.section1}>
       <section className={style3.section2}>
        <section className={style3.section2a}>
        <h1>Start Your Journey With Us</h1>
            <p>We Provide innovative solutions to packaging needs , offering a wide array of customizable options. Elevate your brand with our high-quality packaging solutions tailored to your requirements! Stand out with AI Fayiz Packaging.</p>
        </section>

        <section className={style3.section2b}>
               <section className={style3.section2b1}>

                   <div className={style3.card}>
                          <div className={style3.cardpart1}>
                          <h1 className={style3.h1}>01</h1>
                          <h2 className={style3.h2}>Expert <br /> Workers</h2>
                          </div>
                          <div className={style3.cardpart2}>
                                Skilled crafsmen dedicated to perfecting every detail of your packaging solutions.
                          </div>
                       </div>

                       <div className={style3.card}>
                          <div className={style3.cardpart1}>
                          <h1 className={style3.h1}>02</h1>
                          <h2 className={style3.h2}>Quality <br /> Products</h2>
                          </div>
                          <div className={style3.cardpart2}>
                                Provider of superior packaging solutions crafted with excellence to meet your needs.
                          </div>
                       </div>

                       <div className={style3.card}>
                          <div className={style3.cardpart1}>
                          <h1 className={style3.h1}>03</h1>
                          <h2 className={style3.h2}>Packaging <br /> Specialist</h2>
                          </div>
                          <div className={style3.cardpart2}>
                                Packaging experts dedicated to crafting innovation solutions tailored to your needs.
                          </div>
                       </div>

                       <div className={style3.card}>
                          <div className={style3.cardpart1}>
                          <h1 className={style3.h1}>04</h1>
                          <h2 className={style3.h2}>Excellent <br /> Support</h2>
                          </div>
                          <div className={style3.cardpart2}>
                                Exceptional support tailored to meet your needs, ensuring seamless solutions every step of the way.
                          </div>
                       </div>
               </section>
        </section>
       </section>
    </section>
  )
}

export default CardsContainer