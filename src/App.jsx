import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import PetList from "./pages/PetList"
import PetDetail from "./pages/PetDetail"
import EditPet from "./pages/EditPet"
import AddPet from "./pages/AddPet.jsx"

import "./App.css"


function Home() {
  return (
    <main className="home">

      <div className="home-card">

        <h2>Welcome to Pet Shelter</h2>

        <p>
          Manage the pets available in the shelter.
        </p>

        <div className="home-actions">

          <Link to="/pets">
            <button>View Pets</button>
          </Link>

          <Link to="/add">
            <button>Add Pet</button>
          </Link>

        </div>

      </div>

    </main>
  )
}


function App() {

  const [petToEdit, setPetToEdit] = useState(null)

  return (
    <Router>

      <div className="app">

        <header className="header">

          <div className="header-title">
            <h1>Pet Shelter</h1>
          </div>

          <nav className="navbar">

            <Link to="/">
              Home
            </Link>

            <Link to="/pets">
              Pets
            </Link>

            <Link to="/add">
              Add Pet
            </Link>

          </nav>

        </header>


        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/pets"
            element={<PetList />}
          />

          <Route
            path="/pets/:petId"
            element={
              <PetDetail
                setPetToEdit={setPetToEdit}
              />
            }
          />

          <Route
            path="/pets/:petId/edit"
            element={
              <EditPet
                petToEdit={petToEdit}
              />
            }
          />

          <Route
            path="/add"
            element={<AddPet />}
          />

        </Routes>

      </div>

    </Router>
  )
}

export default App