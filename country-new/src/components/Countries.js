import React, {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import Description from './Description';
import Filter from './Filter';
import classes from './Description.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

const Countries = () => {

    const [countries,setCountries] = useState([]);
   
    const [searchName,setSearchName] = useState('');
    const [filterRegion,setFilterRegion] = useState('');
    
    const changeNameHandler=(event)=> {
      setSearchName(event.target.value);
      console.log('setting search value : ',event.target.value)
    };

    const selectRegionHandler =(event)=>{
      setFilterRegion(event.target.value);
      console.log('setting select value : ',event.target.value)
    }

  //   const navigate = useNavigate();

  // function handleClick(event) {
  //   console.log('card click value : ',event.target.value)
  //   navigate('/description');
    
  // }
   

  const [selectedCard, setSelectedCard] = useState(null);

  // useEffect(() => {
  //   // console.log('countries : ', countries);
  //   console.log('selectedCard value', selectedCard)
  // }, [selectedCard])

  const cardClickHandler=(country)=>{
     setSelectedCard(country)
    console.log('card click handler value : ',country)

  }
  // useEffect(() => {
  //   const fetchCountryDetails = async() => {
  //     const response = await fetch(`https://restcountries.com/v2/name/${selectedCard}`);
  //     const result = await response.json();
  //     setSelectedCard(result);
  //     console.log('selectedCard result value', result)
  // }
  // fetchCountryDetails()
  // }, [])

  // {cards.map((card) => (
  //   <div key={card.id} onClick={() => setSelectedCard(card.id)}>
  //     // Render card information
  //   </div>
  // ))}
  
    useEffect(() => {
      const fetchCountryData = async() => {
        const response = await fetch('https://restcountries.com/v2/all');
        const result = await response.json();
        setCountries(result);
        // console.log(countries);
    }
        fetchCountryData()
    }, [countries])

    useEffect(() => {
      // console.log('countries : ', countries);
      console.log('logging search input with value', searchName, 'with countries : ',countries.filter(country=>(country.name.toLowerCase().includes(searchName.toLowerCase()) || searchName ==='')));
    }, [searchName])


    useEffect(() => {
      // console.log('countries : ', countries);
      console.log('logging filter input with value', filterRegion, 'with countries : ',countries.filter(country=>(
      country.region.toLowerCase().includes(filterRegion.toLocaleLowerCase())   || filterRegion==='' )));
    }, [filterRegion])
    
 
    const highlight=(key, term)=>{
      console.log('called from highlight ', {key, term});
      let highlightedTerm = key;
      if(term){
        highlightedTerm =  key.replace((new RegExp(term, "gi")), `<mark>${term}</mark>` ); 
      }

      return <div dangerouslySetInnerHTML={{ __html: highlightedTerm }} />
   }
  
  return (
    <>
    <Filter searchName={searchName} changeNameHandler={changeNameHandler} selectRegionHandler={selectRegionHandler}/>
    { !selectedCard &&
  <section className='grid'>
  { countries.filter(country=>((country.name.toLowerCase().includes(searchName.toLowerCase()) || searchName ==='' )&&
      (country.region.toLowerCase().includes(filterRegion.toLocaleLowerCase())   || filterRegion==='') )).map((country)=>{
    const {name, population, region, capital , flag} = country 
    console.log('am called from map ')
    return <article key={country.name} onClick={()=>{cardClickHandler(country)}}> 
        <div className='aroundCard'>
            
        {/* onClick={handleClick} */}
           <div className='card' >  
           <img style={{height:'150px',width:"234px"}} src={flag} alt={name} />
           <div className='details'>
            <h3>{highlight(name, searchName)}</h3>
          
           {/* {! searchName && (<h3>{name}</h3>)} */}
            <h4>Population: <span>{population}</span></h4>
            <h4>Region: <span>{region}</span></h4>
            <h4>Capital: <span>{capital}</span></h4>
           </div>
           </div>
        </div>
        
        </article>




    }
    )
      }
   
 
  </section>
  }

  {selectedCard && (
    
    <article>
      <div className={classes.aroundCard}>
          
        <div className={classes.col1}>
       
          <button  onClick={()=>{
            setSelectedCard(null);
          }} >
            <FontAwesomeIcon icon={faArrowLeft}/>
           <p>Back</p></button>
          <img src={selectedCard.flag} alt='flag'/>
        </div>
    
        <div className={classes.col2}>
    
        <div className={classes.col21}>
         <h3>{selectedCard.name}</h3>
          <p>Native name: <span>{selectedCard.nativeName}</span></p>
          <p>Population: <span>{selectedCard.population}</span></p>
          <p>Region: <span>{selectedCard.region}</span></p>
          <p>Sub Region: <span>{selectedCard.subregion}</span></p>
          <p>Capital: <span>{selectedCard.capital}</span></p>
         </div>
    
         <div className={classes.col22}>
          <p>Top level Domain: <span>{selectedCard.topLevelDomain}</span></p>
          <p>Currencies: <span>{selectedCard.currencies.map((n)=>n.code)}</span></p>
          <p>Languages: <span>{selectedCard.languages.map((n)=>n.name)}</span></p>
         </div>
    
         <div>
         <p>Border Countries: <span>{selectedCard.borders}</span></p>
         </div>
        </div>
    
      </div>
      
    </article>
  
)}
</>
  );
}

export default Countries 







// const filteredCountries = countries.filter(
//   country =>
//     country.name.toLowerCase().includes(searchedCountry.toLowerCase()) &&
//     country.region.toLowerCase().includes(region.toLocaleLowerCase())
// );