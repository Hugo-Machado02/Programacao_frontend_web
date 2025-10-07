import React, { useState } from "react";
import Btn from "../../Components/Btn/Btn";
import Input from "../../Components/Input/Input";


const CadastroPessoas = () => {
    const [formData, setFormData] = useState({
    nomePessoa: "",
    dataNascimentoPessoa: "",
    telefonePessoa: "",
    enderecoPessoa: "",
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
                    <h1>Cadastro de Pessoas</h1>
                </div>
                <div className="inputsForm">
                    <Input label="Nome da Pessoa" type="text" value={formData.nomePessoa} name="nomePessoa" onChange={handleChange}/>
                    <Input label="Data de Nascimento" type="date" value={formData.dataNascimentoPessoa} name="dataNascimentoPessoa" onChange={handleChange}/>
                    <Input label="Telefone" type="text" value={formData.telefonePessoa} name="telefonePessoa" onChange={handleChange}/>
                    <Input label="Endereço" type="text" value={formData.enderecoPessoa} name="enderecoPessoa" onChange={handleChange}/>
                </div>
                <div className="containerBtn">
                    <Btn name="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default CadastroPessoas
