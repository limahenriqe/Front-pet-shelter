import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function PetList() {

    const [pets, setPets] = useState([])

    const getPets = async () => {
        try {

            const response = await axios.get(
                "http://localhost:3000/pets"
            )

            if (response.status === 200) {
                setPets(response.data)
            }

        } catch (error) {
            console.error("error", error)
        }
    }

    useEffect(() => {
        getPets()
    }, [])

    return (
        <div className="page-container">

            <div className="page-header">

                <div>
                    <h2>Pets</h2>
                    <p>Registered pets in the shelter.</p>
                </div>

                <Link to="/add">
                    <button>+ Add Pet</button>
                </Link>

            </div>

            <div className="pet-grid">

                {pets.map((pet) => (

                    <div className="pet-card" key={pet.id}>

                        <h3>{pet.name}</h3>

                        <p>
                            <strong>Type:</strong> {pet.type}
                        </p>

                        <p>
                            <strong>Age:</strong> {pet.age}
                        </p>

                        <p>
                            <strong>Breed:</strong> {pet.breed}
                        </p>

                        <Link to={`/pets/${pet.id}`}>
                            <button className="card-button">
                                View Details
                            </button>
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default PetList