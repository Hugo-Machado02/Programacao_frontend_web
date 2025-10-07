import React, { useState } from "react";
import Btn from "../../Components/Btn/Btn";
import Input from "../../Components/Input/Input";


const CadastroProdutos = () => {
    const [formData, setFormData] = useState({
    nomeProduto: "",
    precoProduto: "",
    dataValidadeProduto: "",
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
                    <h1>Cadastro de Produtos</h1>
                </div>
                <div className="inputsForm">
                    <Input label="Nome do Produto" type="text" value={formData.nomeProduto} name="nomeProduto" onChange={handleChange}/>
                    <Input label="Preço do Produto" type="number" value={formData.precoProduto} name="precoProduto" onChange={handleChange}/>
                    <Input label="Data de Validade do Produto" type="date" value={formData.dataValidadeProduto} name="dataValidadeProduto" onChange={handleChange}/>
                </div>
                <div className="containerBtn">
                    <Btn name="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default CadastroProdutos
