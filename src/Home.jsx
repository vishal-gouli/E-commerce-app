// import React from 'react'
// import Cards from './Cards/Cards';
// import CardsContainer from './CardsContainer/CardsContainer';
// import Categories from './Categories/Categories';
// import Container from './Container/Container';
// import Cards from 


// const Home = () => {
//   return (

//     <>
//          <Container />
//     <CardsContainer />
//     <Categories />
//     <Cards />

    
//     </>
   
//   )
// }

// export default Home

import React from 'react'

import Cards from './Cards/Cards';
import CardsContainer from './CardsContainer/CardsContainer';
import Categories from './Categories/Categories';
import Container from './Container/Container';
import Image from './image/Image';



function Home()  {
  return (
    <>
     <Container />
    <CardsContainer />
     <Categories />
    <Cards />
    <Image />
    </>
  )
}

export default Home