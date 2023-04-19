// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'

// const Slider = ({start}) => {
//   return (
//     <Carousel fade>
//        <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src=   "https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg"
//           alt="First slide"
//         />
//         </Carousel.Item>
      
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg"
//         //  alt="First slide"
//         />
        
//       </Carousel.Item>
//        <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg"
//           //alt="First slide"
//         />
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg"
//          // alt="First slide"
//         />
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src=  "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"
//          // alt="First slide"
//         />
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg"
//           //alt="First slide"
//         />
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg"
//           //alt="First slide"
//         />
        
//       </Carousel.Item>
     
      
//     </Carousel>
//   )
// }

// export default Slider


import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
    return (
        <Carousel fade>
       

       {start && start.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
    )
}

export default Slider