import React, { useState } from "react";
import Btn from "../../Components/Btn/Btn";
import Input from "../../Components/Input/Input";


const CadastroAlunos = () => {
    const [formData, setFormData] = useState({
    nomeAluno: "",
    matriculaAluno: "",
    contatoAluno: "",
    nota1Aluno: "",
    nota2Aluno: "",
    nota3Aluno: "",
    nomeCurso: "",
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
                    <Input label="Nome do Aluno" type="text" value={formData.nomeAluno} name="nomeAluno" onChange={handleChange}/>
                    <Input label="Matricula do Aluno" type="number" value={formData.matriculaAluno} name="matriculaAluno" onChange={handleChange}/>
                    <Input label="Telefone de Contato" type="text" value={formData.contatoAluno} name="contatoAluno" onChange={handleChange}/>
                    <Input label="Nota 1" type="number" value={formData.nota1Aluno} name="nota1Aluno" onChange={handleChange}/>
                    <Input label="Nota 2" type="number" value={formData.nota2Aluno} name="nota2Aluno" onChange={handleChange}/>
                    <Input label="Nota 3" type="number" value={formData.nota3Aluno} name="nota3Aluno" onChange={handleChange}/>
                    <Input label="Nome do Curso" type="text" value={formData.nomeCurso} name="nomeCurso" onChange={handleChange}/>
                </div>
                <div className="containerBtn">
                    <Btn name="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default CadastroAlunos
