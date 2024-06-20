import React from 'react'
import style4 from './Categories.module.css'
import { BsCupHotFill } from "react-icons/bs";
import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { TbCup } from "react-icons/tb";
import { LuCupSoda } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa";
import { IoIceCreamSharp } from "react-icons/io5";
import { LuIceCream2 } from "react-icons/lu";


const Categories = () => {
  return (
   <>
  <section className={style4.section1}>
    <section className={style4.section2}>
        <section className={style4.sectionA}>
            <h1>Find out by popular Categories</h1>
            <p>We offers a brand new approach to the most basic learning paradigms choose from a wide range of learning options and gain new skills! OUr school is know.</p>
            
        </section>
        <section className={style4.sectionB}>

            <div className={style4.container}>
                <div className={style4.logo}>
                <BsCupHotFill className={style4.img}/>
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
                     Paper Cups
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <GiCupcake  className={style4.img} />
                       {/* <img src="https://media.istockphoto.com/id/467108213/photo/red-cardboard-cup-with-a-straw.jpg?s=612x612&w=0&k=20&c=tkx8YkdZTYJWaslh571sKof3v78yrl_HapEvTawfGDE=" alt="" /> */}
                </div>
                <div className={style4.content}>
                     plastic Cups
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <RiCake3Line className={style4.img} />
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
                     Carry Bags
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <TbCup className={style4.img}/>
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
     Tissue paper
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <LuCupSoda className={style4.img} />
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
FoodGrade Box
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <FaBoxOpen className={style4.img}/>
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
Plastic Bags
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <IoIceCreamSharp className={style4.img}/>
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
Coffee Bean bag
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <RiCake3Line className={style4.img} />

                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
Cake Boxes
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <LuIceCream2 className={style4.img}/>
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
Take away boxes
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <RiCake3Line className={style4.img} />
                      
                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
coffe bags
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <BsCupHotFill className={style4.img}/>

                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
Double Wall cups
                </div>
            </div>

            <div className={style4.container}>
                <div className={style4.logo}>
                <FaBoxOpen className={style4.img}/>

                       {/* <img src="https://thumbs.dreamstime.com/b/coffee-to-go-10526366.jpg?w=360" alt="" /> */}
                </div>
                <div className={style4.content}>
carry bags
                </div>
            </div>
        </section>

    </section>
  </section>
   </>
  )
}

export default Categories