// import React from 'react'
import PropTypes from 'prop-types';

const CountryItem = ({flag, name, capital}) => {
  return (
      <div className='flex flex-col justify-center items-center border-2 p-2'>
          <img src={flag} alt={name} className='w-20 h-20' />
          <p className='font-bold text-lg'>{name}</p>
          <p className='text-sm'> {capital}</p>
          
    </div>
  )
}

CountryItem.propTypes = {
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,

}

export default CountryItem;
