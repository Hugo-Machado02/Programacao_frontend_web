import React from 'react'

const Home = () => {
    return (
        <div className="containerForm"> 
            <div className="form">
                <div className="titulo">
                    <h1>Bem-vindo ao Sistema de Gestão</h1>
                </div>

                <p className="home-description">
                    Utilize a barra de navegação no topo para acessar os módulos de cadastro: Produtos, Pessoas, Notas, Cursos e Alunos.
                </p>
                
                <div className="containerBtn">
                    <a href="/CadProdutos" className="home-button">
                        Iniciar Cadastro
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Home
