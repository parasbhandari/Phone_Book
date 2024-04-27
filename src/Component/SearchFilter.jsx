import React from 'react'
import {FaAddressBook,FaArrowsAltV} from 'react-icons/fa'
function SearchFilter({handleToggleContacts,sort,handleSearchContact}) {

  return (
    <section className='text-center'>
      <button onClick={handleToggleContacts}><FaAddressBook></FaAddressBook></button>
      <input type="text" placeholder="Search by first name" className='mb-2 mx-1' style={{padding:".3rem .5rem"}} onChange={(e)=>handleSearchContact(e.target.value)} />
      <button onClick={sort}><FaArrowsAltV></FaArrowsAltV></button>
    </section>
  )
}

export default SearchFilter