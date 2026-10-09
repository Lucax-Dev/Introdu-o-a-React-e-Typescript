import { useState, useEffect } from "react";
import { eventoService } from "../../services/eventPlusservice";
import type { Evento } from "../../types/api";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardEvento from "../../components/cardEvento/CardEvento";

import "./Eventos.css";

function Eventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => {
        async function carregar() {
            try {
                const dados = await eventoService.listar();
                setEventos(dados);
            } catch (erro) {
                console.error("Erro ao carregar o catálogo de eventos:", erro);
            }
        }

        void carregar();
    }, []);

    return (
        <>
            <Header />
            <main>
                <h1>Catálogo de eventos</h1>
                <div className="eventos-lista">
                    {eventos.map((evento) => (
                        <CardEvento 
                            key={evento.idEvento}
                            id={evento.idEvento}
                            imagem={evento.imagemUrl}
                            categoria={evento.idTipoEventoNavigation?.titulo}
                            titulo={evento.nome}
                            descricao={evento.descricao}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Eventos;