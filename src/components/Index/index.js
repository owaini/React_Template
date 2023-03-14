import React from 'react'
import Contact from '../Contact'
import Home from '../Home'
import NavBar from '../NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from '../Footer'


function index() {
  return (
		<BrowserRouter>
			
				<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
			  <Footer />
		</BrowserRouter>
	);
}

export default index