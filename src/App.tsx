import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './components/Login/Login';
import SpaceList from './Components/SpaceList/SpaceList';
import Footer from './Components/Footer/Footer';
import SpaceDetails from './Components/SpaceDetails/SpaceDetails';
import Signup from './components/Signup/Signup';
import Booking from './components/Booking_Form/Booking';
import { Owner, User } from './Interface';
import Confirmation from './components/Booking_Confirmation/Confirmation';
import OwnerSignup from './components/OwnerSignup/OwnerSignup';
import OwnerLogin from './components/OwnerLogin/OwnerLogin';
import About from './Components/About/About';

import AdminNav from './Admin/AdminNav';
import AdminCard from './Admin/AdminCard';
import AddSpace from './Admin/AddSpace';
import SideBar from './Admin/SideBar';
import ListOfSpaces from './Admin/ListOfSpaces';
import BookedList from './Admin/BookedList';
import AddSpaceForm from './components/AddSpaceForm/AddSpaceForm';
import SpacesOwned from './components/SpacesOwned/SpacesOwned';
import OwnerDashboard from './Components/OwnerDashboard/OwnerDashboard';

function App() {
  const [user, setUser] = useState<User>();
  const [owner, setOwner] = useState<Owner>();
  return (
    <div>
      <Routes>
        <Route path="*" element={<UserDashboard user={user} setUser={setUser} setOwner={setOwner} />} />
        <Route path="/owner/*" element={<OwnerDashboard owner={owner} />} />
      </Routes>

      {/* <SideBar />
      <Routes>
        <Route path='/adminDashboard' element={<AdminCard />} />
        <Route path='/addSpace' element={<AddSpace />} />
        <Route path='/listofspace' element={<ListOfSpaces />} />
        <Route path='/bookedlist' element={<BookedList />} />
      </Routes> */}

      {/* <AddSpaceForm /> */}
    </div>
  );
}

const UserDashboard = ({ user, setUser, setOwner }: { user: User | undefined, setUser: any, setOwner: any }) => {
  return (
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/spacelist" element={<SpaceList />} />
        <Route path="/spacelist/:type" element={<SpaceList />} />
        <Route path="/spacedetails/:id" element={<SpaceDetails user={user} />} />
        <Route path="/booking/:id" element={<Booking user={user} />} />
        <Route path="/confirmBooking" element={<Confirmation />} />
        <Route path="/ownerSignup" element={<OwnerSignup />} />
        <Route path="/ownerLogin" element={<OwnerLogin setOwner={setOwner} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
