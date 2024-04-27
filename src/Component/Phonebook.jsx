import React from 'react'
import Title from './Title'
import { useState } from 'react'
import ContactList from './ContactList'
import {getContacts} from './db'
import SearchFilter from './SearchFilter'
function Phonebook() {
  let dbContacts=getContacts();
  const[showContacts,setShowContacts]=useState(false);
  const [sortAZ,setSortAZ]=useState(true);
  const[searchContact,setSearchContact]=useState("");
  function toggleContact(){
    showContacts?setShowContacts(false):setShowContacts(true);
  }
  function toggleSortAZ(){
    sortAZ?setSortAZ(false):setSortAZ(true)
  }
  return (
    <div>
      <Title title={"Phone Book"}></Title>
      <main className="bg-dark text-light p-1">
  <SearchFilter handleToggleContacts={toggleContact} sort={toggleSortAZ} handleSearchContact={setSearchContact}/>
  <div style={{ height: 650, overflow: "auto" }}>
  <h2 className='subtitle text-center'>Display contacts</h2>
  {showContacts && (
    <ContactList
      contacts={
        (
          sortAZ
            ? dbContacts.slice().sort((a, b) => a.first_name.localeCompare(b.first_name))
            : dbContacts.slice().sort((a, b) => b.first_name.localeCompare(a.first_name))
        ).filter((contact) => {
          if (searchContact === "") {
            return true; // Return all contacts when search is empty
          } else {
            // Return contacts that match the search query (case-insensitive)
            return contact.first_name.toLowerCase().includes(searchContact.toLowerCase());
          }
        })
      }
    />
  )}
</div>

</main>
    </div>
  )
}

export default Phonebook