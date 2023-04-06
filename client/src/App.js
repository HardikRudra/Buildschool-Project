import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import Chat from './pages/Chat';
import Login from './pages/Login';
import RootLayout from './layouts/RootLayout';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Billupload from './pages/Billupload';
import Managerchat from './pages/Managerchat';
import Approve from './pages/Approve';
import Pay from './pages/Pay';
import Register1 from './pages/Register1';
import Login1 from './pages/Login1';
import Homepage from './pages/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
       <Route path="/" element={<RootLayout />}>
      <Route index element={<Chat />} />
      <Route path="/addbill" element={<Billupload />}/>
      <Route path="/manager" element={<Managerchat />}/>
      <Route path="/manager/approvebills" element={<Approve />}/>
      <Route path="/manager/paybills" element={<Pay />}/>
     </Route>


     {/* <Route path="/" element={<RootLayout />}>
      <Route index element={<Chat />} />
      <Route path="/addbill" element={<Billupload />}/>
      <Route path="/manager" element={<Managerchat />}/>
      <Route path="/manager/approvebills" element={<Approve />}/>
      <Route path="/manager/paybills" element={<Pay />}/>
     </Route> */}



     <Route path="/home" element={<Homepage />}/>
     <Route path="/register" element={<Register1 />} />
      <Route path="/login" element={<Login />} />
      
    </>
   
  )
)

function App() {
  return (
    
    <RouterProvider router={router} />
  );
}


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<LoginLayout />}>
//       <Route index element={<Homepage />} />
//       <Route path="/register" element={<Register />} />
//       <Route index element={<Login />} />
//       <Route path="/chat" element={<RootLayout />}>
//       <Route path="/addbill" element={<Billupload />}/>
//       <Route path="/manager" element={<Managerchat />}/>
//       <Route path="/manager/approvebills" element={<Approve />}/>
//       <Route path="/manager/paybills" element={<Pay />}/>
      

//       </Route>
      

//     </Route>
//   )
// )

// function App() {
//   return (

    
//     <RouterProvider router={router} />
    
//   );
// }







export default App

























// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<LoginLayout />}>
//       <Route index element={<Homepage />} />
//       <Route path="login" element={<Login />}/>
//       <Route path="register" element={<Register />}/>
      
//       <Route path="chat" element={<RootLayout />}>
//       <Route index element={<Chat />}/>
//       <Route path="/addbill" element={<Billupload />}/>
//       <Route path="/manager" element={<Managerchat />}/>
//       <Route path="/manager/approvebills" element={<Approve />}/>
//       <Route path="/manager/paybills" element={<Pay />}/>
//       </Route>

      
      

//     </Route>
//   )
// )
