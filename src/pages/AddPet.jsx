import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AddPet() {

    const [petName, setPetName] = useState("")
    const [petType, setPetType] = useState("")
    const [petAge, setPetAge] = useState("")
    const [petBreed, setPetBreed] = useState("")

    const addPet = async () => {
        try {

            const petData = {
                name: petName,
                type: petType,
                age: Number(petAge),
                breed: petBreed
            }

            const response = await axios.post(
                "http://localhost:3000/pets/",
                petData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            if (response.status === 200) {
                window.location.href = `/pets/${response.data.id}`
            }

        } catch (error) {
            console.error("error", error)
        }
    }

    return (
        <div className="page-container">

            <div className="form-card">

                <h2>Add Pet</h2>

                <div className="form-group">
                    <label>Name</label>

                    <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Type</label>

                    <input
                        type="text"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>

                    <input
                        type="number"
                        value={petAge}
                        onChange={(e) => setPetAge(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Breed</label>

                    <input
                        type="text"
                        value={petBreed}
                        onChange={(e) => setPetBreed(e.target.value)}
                    />
                </div>

                <div className="form-actions">

                    <Link to="/pets">
                        <button className="secondary-button">
                            Cancel
                        </button>
                    </Link>

                    <button onClick={addPet}>
                        Add Pet
                    </button>

                </div>

            </div>

        </div>
    )
}

export default AddPet