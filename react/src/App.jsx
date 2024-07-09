import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  
  const[formVisible, setFormVisible] = useState(false)

  useEffect(() => {
  
    axios.get('http://localhost:5500/api/read').then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    }).catch((err) => {
      console.log(err);
    })
  
    }, [flag]);
  
    const handleDelete = async (id) => {
      alert("Are you sure?");
      await axios.post(`http://localhost:5500/api/delete/${id}`).then((res) => {
        setFlag(flag + 1);
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }


    const PopupForm = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log(formData);
        setIsOpen(false);
      };
    

    
  
  
    return (
      <>
  
  
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value,key) => {
                  return (
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value.id}
                      </th>
                      <td className="px-6 py-4">
                        {value.name}
                      </td>
                      <td className="px-6 py-4">
                        {value.email}
                      </td>
                      <td className="px-6 py-4">
                        {value.contact}
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                        <button className="rounded-md p-2 px-4 bg-red-500 hover:bg-red-700" onClick={() => {
                          handleDelete(value.id)
                        }}>Delete</button>
                        <button className="rounded-md p-2 px-4 bg-blue-500 hover:bg-blue-700" onClick={()=>{setFormVisible(true)}}>Edit</button>

                        {
                          formVisible && 
                          <div className="layout">
                            <form action="">
                              <button onClick={()=>{setFormVisible(false)}}>&times;</button>
                              <input type="text" name="" id="" placeholder='name'/>
                              <input type="text" name="" id="" placeholder='email'/>
                              <input type="text" name="" id="" placeholder='contact'/>
                              <button>Edit</button>
                            </form>
                          </div>
                        }
                        
          
                      </td>
                    </tr>
                  )
                })
              }
  
            </tbody>
          </table>
        </div>

      </>
    )
  }
  
  export default App
