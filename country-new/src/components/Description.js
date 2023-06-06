// import React from 'react'
// import Header from './Header'
// import classes from './Description.module.css'
// // import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const Description = () => {

//   // const [country,setCountry] = useState([]);


//   const navigate = useNavigate();

//   function backHandler(event) {
//     console.log('back button value : ',event.target.value)
//     navigate('/');
    
//   }
//   return (
//     <>
//     <Header/>
//     <article>
//             <div className={classes.aroundCard}>
                
//               <div className={classes.col1}>
//                 <button onClick={backHandler} >
//                   <FontAwesomeIcon icon={faArrowLeft}/>
//                  <p>Back</p></button>
//                 <img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg' alt='flag'/>
//               </div>

//               <div className={classes.col2}>

//               <div className={classes.col21}>
//                <h3>Name {countries.name}</h3>
//                 <p>Native name: <span></span></p>
//                 <p>Population: <span></span></p>
//                 <p>Region: <span></span></p>
//                 <p>Sub Region: <span></span></p>
//                 <p>Capital: <span></span></p>
//                </div>

//                <div className={classes.col22}>
//                 <p>Top level Domain: <span></span></p>
//                 <p>Curremcies: <span></span></p>
//                 <p>Languages: <span></span></p>
//                </div>

//                <div>
//                <p>Border Countries: <span></span></p>
//                </div>
//               </div>
               

              


//             </div>
            
//     </article>
//     </>
    
//   )
// }

// export default Description