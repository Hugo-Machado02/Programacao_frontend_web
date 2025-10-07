import React, { useState } from "react";
import Btn from "../../Components/Btn/Btn";
import Input from "../../Components/Input/Input";

const CadastroNotas = () => {
    const [formData, setFormData] = useState({
    nomeAluno: "",
    nota1Aluno: "",
    nota2Aluno: "",
    nota3Aluno: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Produto cadastrado:", formData);
        alert(`Produto ${formData.nomeAluno} cadastrado com sucesso!`);
    };

    
    return (
        <>
        <div className="containerForm">
            <form className='form' onSubmit={handleSubmit}>
                <div className="titulo">
                    <h1>Cadastro de Notas</h1>
                </div>
                <div className="inputsForm">
                    <Input label="Nome do Aluno" type="text" value={formData.nomeAluno} name="nomeAluno" onChange={handleChange}/>
                    <Input label="Digite a Nota 1 do Aluno" type="number" value={formData.nota1Aluno} name="nota1Aluno" onChange={handleChange}/>
                    <Input label="Digite a Nota 2 do Aluno" type="number" value={formData.nota2Aluno} name="nota2Aluno" onChange={handleChange}/>
                    <Input label="Digite a Nota 3 do Aluno" type="number" value={formData.nota3Aluno} name="nota3Aluno" onChange={handleChange}/>
                </div>
                <div className="containerBtn">
                    <Btn name="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default CadastroNotas
