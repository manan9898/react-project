
import { useState } from 'react';
import './App.css';
import {motion} from "framer-motion"
import manangupta from "./assets/manangupta.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose } from 'react-icons/ai';
import { IoAddCircleSharp } from 'react-icons/io5';
import {IconContext} from "react-icons";
function App() {

  const [name1,setname]=useState('');
  const [pre,setprev]=useState([]);
  const[activityname,setactivityname]=useState('');
const[description, setdescription]=useState('');
  
  const change=(e)=>{
    setname(e.target.value);
  }
  const getname=()=>{
    setprev([...pre,name1]);
    setname('');

  }
  const sidebar=(()=>{
   
   var element= document.getElementById("hell");
   element.classList.toggle("active");
  })
  const tosting=(()=>{
    if(activityname!='' && description!='' && pre!=[])
    {
        localStorage.setItem('activityname',
          activityname
         );
         localStorage.setItem('description',
          description
         );
      
    toast.info("Activity Saved",{ theme: "colored"})
    var element= document.getElementById("hell");
    element.classList.toggle("active");
    setname('')
    setprev([]);
    setactivityname('');
    setdescription('');
    }
    else{
     
      toast.error("All field's are requared!");
    }
   
  })


  return (
   <div>
  
      <motion.div
      initial={{x:'-100vw'}}
      animate={{x:0}}
      transition={{type:'spring',duration:1,bounce:0.3}} >

          <img
            src={manangupta}
            alt="my profile"
            className=" mt-48 ml-16 rounded-2xl h-60 w-60 transform transition-all duration-100 ease-in"
          />
          <div>
           <h2 className="text-2xl font-bold text-black row-auto mx-16 ">
            I'm Full Stack Developer 
          </h2>
          <p className="text-black py-4 max-w-md row-auto mx-16 ">
            I have 2 years of experience building and desgining software and testing the application
            Currently, I love to work on web application using technologies like
            React, Tailwind, nodejs ,mongodb, selenium ,postman.
          </p>
          </div>
        </motion.div>
       
    <button className='button' onClick={sidebar}>Create Activity</button>
    <div className='sidebar ' id='hell'>
      <div className='hadder'>
      <div className='cross'>
      <button onClick={sidebar}><AiOutlineClose/></button>
      </div>
      <button className='save' onClick={tosting}>SAVE</button>
      <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </div>
      <div className='line'></div>
      <div className='activity'>
      <input type='text'onChange={(e)=>{setactivityname(e.target.value)}} value={activityname} required='true' placeholder='Activity Name'></input>
      </div>
      <div className='Description'>
       <input type='text' onChange={(e)=>{setdescription(e.target.value)}} value={description} placeholder='Description' required='true'></input>
       </div>
       <div className='line'></div>
       <div className='capabilities'>
        <div>
          <label htmlFor='cap'>capabilities</label>
        </div>
        </div>
       <div className='wrapp'>
        <div className='enter'>
          <div className='entercapability'>
          <input type='text' placeholder='Enter Capability' onChange={change} value={name1} required='true'></input>
          </div>
        </div>
        <button className='add' onClick={getname}>
        <IconContext.Provider value={{size: 42}}>
        <IoAddCircleSharp/>
        </IconContext.Provider>
         
          </button>
       </div>
       <div className='list_items'>
      <ul className='list'>
        {
          pre.map((a,i)=>
          {
           return <li className='items_' key={i}>{a}</li>
          })
        }
      </ul>
      </div>

       

      </div>
    </div>
  
   
  );
}

export default App;
