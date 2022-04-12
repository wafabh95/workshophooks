import './App.css';
import react, { useState ,useEffect} from 'react'
import ListContact from "./components/ListContact"
import Filter from "./components/Filter"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact';

function App() {
  // 1 initialisation "filter"
  const [filter,setFilter]=useState("")

  const [contactList,setContactList]=useState([
    {
      name:"nour",
      tel:"12345678",
      adress:"sousse"
    },
    {
      name:"abir",
      tel:"12345678",
      adress:'sousse'
    }

     ])
    //  2 "function handleFilter set"
     const handleFilter=(val)=>{
         setFilter(val)
     }
     const handleAddContact=(val)=>{
          setContactList([...contactList,val])
     }
      //  state was updated
    useEffect(()=>{
      console.log("filter was updated")
  },[filter])
  return (
    <div className="App">
      <header className="App-header">
         {/* 3 function props  */}
      <Filter handleFilter={handleFilter}/>
      <ListContact list={contactList.filter(elm=>elm.name.toUpperCase().includes(filter.toUpperCase()))}></ListContact>
     <AddContact handleAddContact={handleAddContact}/>
      </header>
    </div>
  );
}

export default App;
