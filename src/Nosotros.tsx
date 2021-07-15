import styled, { css } from "styled-components";
import { Device } from "globalStyle";

import Footer from "components/Footer";

const Container = styled.div`
    height: 100%;
    text-align: center;

    @media ${Device.laptop} {
    }

    ${(props) =>
        props.state === "entering"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transform: scale(0.9);
              `
            : props.state === "exiting"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transition: 0.3s ease-in;
              `
            : css`
                  visibility: visible;
                  opacity: 1;
                  transform: initial;
                  transition: 0.3s ease-out;
              `};
`;

const Section = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    > div {
        padding: 20px;
        display: inline-block;
        max-width: 1000px;
    }

    h2 {
        position: relative;
    }

    h2::after {
        content: " ";
        display: block;
        margin: 28px auto;
        height: 8px;
        width: 100px;
        background: var(--secondary);
    }
`;

const Valores = styled.div`
    padding: 20px;
    background: #fff;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--shadow0);

    > div {
        padding: 20px;
        display: inline-block;
        max-width: 1000px;
    }

    h2 {
        position: relative;
    }

    h2::after {
        content: " ";
        display: block;
        margin: 28px auto;
        height: 8px;
        width: 200px;
        background: var(--secondary);
    }
`;

const Info = function ({ state }) {
    return (
        <>
            <Container state={state}>
                <Section>
                    <div>
                        <h2>Mision</h2>
                        <h4>
                            Somos la imagen de los mejores proyectos
                            vitivinicolos de nuestra tierra junto a los más
                            prestigiosos y admirados enólogos de Argentina.
                        </h4>
                    </div>
                    <div>
                        <h2>Vision</h2>
                        <h4>
                            Lograr convertirnos en la empresa N°1 en Argentina
                            que albergue los productos más aclamados y
                            exclusivos del país.
                        </h4>
                    </div>
                </Section>
                <Valores>
                    <div>
                        <h2>Valores de la empresa</h2>
                        <h4>
                            El grupo humano es lo más importante en esta empresa
                            con una retroalimentación entre todas las partes.
                        </h4>
                        <h4>
                            Profesionales en administración, ventas y logística
                            con más de 20 años en la organización.
                        </h4>
                        <h4>
                            Equipo especializado e instruido de sommeliers
                            siendo estos también profesores de la materia.
                        </h4>
                        <h4>
                            Sector de diseño y comunicación para el empleo de
                            acciones institucionales y comerciales.
                        </h4>
                    </div>
                </Valores>
            </Container>
            <Footer />
        </>
    );
};

export default Info;
