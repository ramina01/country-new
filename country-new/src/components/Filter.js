import React from 'react'

const Filter = ({searchName,changeNameHandler,selectRegionHandler}) => {
  
  return (
    <section className='filter'>
        <form className='form-control'>
            <input type='search' value={searchName} name='search' id='search' placeholder='Search for a country...'
           onChange={changeNameHandler}
            />
        </form>

        <div className='region-filter'>
        <select id="select" name='select' className="select" onChange={selectRegionHandler} aria-label='select'>
  <option >Filter by Region</option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>
        </div>
    </section>
  )
}

export default Filter