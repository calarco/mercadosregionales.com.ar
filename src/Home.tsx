import React from "react";
import styled from "styled-components";
import { Device } from "globalStyle";

import Bodegas from "components/Bodegas";
import map from "assets/map.svg";
import Footer from "components/Footer";

const Container = styled.div`
    height: 100%;
    text-align: center;

    @media ${Device.laptop} {
    }
`;

const Section = styled.div`
    width: 100%;
    padding: 40px 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    @media ${Device.laptop} {
        padding: 80px 0;
    }

    h3 {
        display: inline-block;
        max-width: 1000px;
    }
`;

const Cobertura = styled.div`
    width: 100%;
    padding: 0 40px;
    background: #fff;
    text-align: left;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: var(--shadow0);
    display: grid;
    align-items: center;

    img {
        width: 100%;
    }

    div {
        padding: 40px 0;
    }

    h2 {
        text-align: left;
        position: relative;
    }

    h2::after {
        content: " ";
        display: block;
        margin: 28px 0;
        height: 8px;
        width: 200px;
        background: var(--secondary);
    }

    h4 {
        text-align: left;
    }

    @media ${Device.laptop} {
        padding: 0 100px;
        grid-template-columns: 1fr 1fr;

        div {
            padding: 0 0 0 80px;
        }
    }

    @media ${Device.desktop} {
        padding: 0 140px;

        div {
            padding: 0 0 0 120px;
        }
    }
`;

const Home = function ({ state }) {
    return (
        <>
            <Container>
                <Section>
                    <h3>
                        Nacimos para cumplir el objetivo de representar la otra
                        cara de nuestra tierra, un mundo no tradicional, bodegas
                        exclusivas con partidas limitadas, saliendo de la
                        masividad y lo conservador, para adentrarnos en el
                        futuro de un nuevo concepto de producto.
                    </h3>
                </Section>
                <Bodegas state={state} />
                <Cobertura>
                    <img src={map} alt="logo" />
                    <div>
                        <h2>Zonas de cobertura</h2>
                        <h4>
                            Con base en la ciudad de Mar del Plata, cubrimos la
                            Prov. de Bs. As. (excepto Capital Federal y La
                            Plata) y la Prov. de La Pampa.
                        </h4>
                        <h4>
                            Con un equipo de ventas altamente capacitado tenemos
                            una eficiencia y amplia distribución de nuestros
                            productos en cada canal de referencia.
                        </h4>
                    </div>
                </Cobertura>
            </Container>
            <Footer />
        </>
    );
};

export default Home;
