import React from 'react';
import './App.css';
import imagemPraia from './assets/praia.jpg';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header>
            <h1>Meu Blog de Viagens</h1>
            <Navigation />
        </header>
    );
};

const Sidebar = () => {
    return (
        <aside>
            <h3>Posts Relacionados</h3>
            <ul>
                <li><a href="#">Post 1</a></li>
                <li><a href="#">Post 2</a></li>
                <li><a href="#">Post 3</a></li>
                <li><a href="#">Post 4</a></li>
            </ul>
        </aside>
    );
};

const Article = ({ titulo, autor, dataEscrita, dataDisplay, paragrafos, imagemSrc, imagemAlt }) => {
    return (
        <article>
            <h2>{titulo}</h2>
            <p><strong>Autor:</strong> {autor}</p>
            <time dateTime={dataEscrita}>{dataDisplay}</time>
            
            {paragrafos.map((texto, index) => (
                <p key={index}>{texto}</p>
            ))}

            <figure>
                <img src={imagemSrc} alt={imagemAlt} />
                <figcaption>{imagemAlt}</figcaption>
            </figure>
        </article>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2026 - Todos os direitos reservados.</p>
        </footer>
    );
};

const App = () => {

    const dadosDoPost = {
        titulo: "Descobrindo as Praias do Nordeste",
        autor: "Arthur",
        dataEscrita: "2026-02-25",
        dataDisplay: "02 de Fevereiro de 2026",
        conteudo: [
            "O Brasil é bão mesmo, cheio de praias, nordeste muito bom, quente, açaí, Fernando de noranhas topezeira demais",
            "O nordeste é conhecido por ser um lugar com suas praias paradisiacas, montanhas de areia."
        ],
        imagem: imagemPraia,
        descricaoImagem: "Praia do Nordeste"
    };

    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <Article 
                    titulo={dadosDoPost.titulo}
                    autor={dadosDoPost.autor}
                    dataEscrita={dadosDoPost.dataEscrita}
                    dataDisplay={dadosDoPost.dataDisplay}
                    paragrafos={dadosDoPost.conteudo}
                    imagemSrc={dadosDoPost.imagem}
                    imagemAlt={dadosDoPost.descricaoImagem}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;