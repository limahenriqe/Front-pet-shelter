import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

function PetDetail({ setPetToEdit }) {

    const [pet, setPet] = useState(null)

    const { petId } = useParams()

    const getPet = async () => {
        try {

            const response = await axios.get(
                `http://localhost:3000/pets/${petId}`
            )

            if (response.status === 200) {

                setPet(response.data)

                if (setPetToEdit) {
                    setPetToEdit(response.data)
                }
            }

        } catch (error) {
            console.error("error", error)
        }
    }

    useEffect(() => {
        getPet()
    }, [petId])


    const deletePet = async () => {
        try {

            const response = await axios.delete(
                `http://localhost:3000/pets/${petId}`
            )

            if (response.status === 200) {
                window.location.href = "/pets"
            }

        } catch (error) {
            console.error("error", error)
        }
    }


    if (!pet) {
        return (
            <div className="page-container">
                <p>Carregando pet...</p>
            </div>
        )
    }

    return (
        <div className="page-container">

            <div className="detail-card">

                <div className="detail-header">

                    <div>
                        <h2>{pet.name}</h2>
                    </div>

                </div>


                <div className="pet-information">

                    <div className="info-item">
                        <span>Name</span>
                        <strong>{pet.name}</strong>
                    </div>

                    <div className="info-item">
                        <span>Type</span>
                        <strong>{pet.type}</strong>
                    </div>

                    <div className="info-item">
                        <span>Age</span>
                        <strong>{pet.age} anos</strong>
                    </div>

                    <div className="info-item">
                        <span>Breed</span>
                        <strong>{pet.breed}</strong>
                    </div>

                </div>


                <div className="detail-actions">

                    <Link to="/pets">
                        <button className="secondary-button">
                            Back
                        </button>
                    </Link>

                    <Link to={`/pets/${pet.id}/edit`}>
                        <button>
                            Edit Pet
                        </button>
                    </Link>

                    <button
                        className="delete-button"
                        onClick={deletePet}
                    >
                        Remove Pet
                    </button>

                </div>

            </div>

        </div>
    )
}

export default PetDetail