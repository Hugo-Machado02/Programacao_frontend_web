import React, { useState } from "react";
import Btn from "../../Components/Btn/Btn";
import Input from "../../Components/Input/Input";


const CadastroCursos = () => {
    const [formData, setFormData] = useState({
    nomeEscola: "",
    enderecoEscola: "",
    telefoneEscola: "",
    nomeCurso: "",
    descricaoCurso: ""
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
                    <h1>Cadastro de Alunos</h1>
                </div>
                <div className="inputsForm">
                    <Input label="Nome da Escola" type="text" value={formData.nomeEscola} name="nomeEscola" onChange={handleChange}/>
                    <Input label="Endereço da Escola" type="text" value={formData.enderecoEscola} name="enderecoEscola" onChange={handleChange}/>
                    <Input label="Telefone da Escola" type="text" value={formData.telefoneEscola} name="telefoneEscola" onChange={handleChange}/>
                    <Input label="Nome do Curso" type="text" value={formData.nomeCurso} name="nomeCurso" onChange={handleChange}/>
                    <Input label="Descrição do Curso" type="text" value={formData.descricaoCurso} name="descricaoCurso" onChange={handleChange}/>
                </div>
                <div className="containerBtn">
                    <Btn name="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default CadastroCursos
