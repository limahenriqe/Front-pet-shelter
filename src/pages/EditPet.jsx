import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function EditPet({ petToEdit }) {

    const [petName, setPetName] = useState(petToEdit?.name || "")
    const [petType, setPetType] = useState(petToEdit?.type || "")
    const [petAge, setPetAge] = useState(petToEdit?.age || "")
    const [petBreed, setPetBreed] = useState(petToEdit?.breed || "")

    const editPet = async () => {
        try {

            const petData = {
                id: petToEdit.id,
                name: petName,
                type: petType,
                age: Number(petAge),
                breed: petBreed
            }

            const response = await axios.put(
                `http://localhost:3000/pets/${petToEdit.id}`,
                petData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            if (response.status === 200) {
                window.location.href = `/pets/${petToEdit.id}`
            }

        } catch (error) {
            console.error("error", error)
        }
    }

    if (!petToEdit) {
        return (
            <div className="page-container">
                <div className="message-card">

                    <h2>Nenhum pet selecionado</h2>

                    <p>
                        Volte para a lista e escolha um pet para editar.
                    </p>

                    <Link to="/pets">
                        <button>Voltar para Pets</button>
                    </Link>

                </div>
            </div>
        )
    }

    return (
        <div className="page-container">

            <div className="form-card">

                <h2>Editar Pet</h2>

                <p className="page-description">
                    Altere as informações do pet.
                </p>

                <div className="form-group">
                    <label>Nome</label>

                    <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Tipo</label>

                    <input
                        type="text"
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Idade</label>

                    <input
                        type="number"
                        value={petAge}
                        onChange={(e) => setPetAge(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Raça</label>

                    <input
                        type="text"
                        value={petBreed}
                        onChange={(e) => setPetBreed(e.target.value)}
                    />
                </div>

                <div className="form-actions">

                    <Link to={`/pets/${petToEdit.id}`}>
                        <button className="secondary-button">
                            Cancelar
                        </button>
                    </Link>

                    <button onClick={editPet}>
                        Salvar Alterações
                    </button>

                </div>

            </div>

        </div>
    )
}

export default EditPet