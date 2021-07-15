import styled, { css } from "styled-components";
import { Device } from "globalStyle";

import servicios00 from "assets/servicios00.png";
import servicios01 from "assets/servicios01.png";
import servicios02 from "assets/servicios02.png";
import servicios03 from "assets/servicios03.png";
import servicios04 from "assets/servicios04.png";
import servicios05 from "assets/servicios05.png";
import servicios06 from "assets/servicios06.png";
import servicios07 from "assets/servicios07.png";
import servicios08 from "assets/servicios08.png";
import servicios09 from "assets/servicios09.png";
import servicios10 from "assets/servicios10.png";
import servicios11 from "assets/servicios11.png";
import servicios12 from "assets/servicios12.png";
import servicios13 from "assets/servicios13.png";
import servicios14 from "assets/servicios14.png";
import servicios15 from "assets/servicios15.png";
import servicios16 from "assets/servicios16.png";
import servicios17 from "assets/servicios17.png";
import servicios18 from "assets/servicios18.png";
import servicios19 from "assets/servicios19.png";
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

    @media ${Device.desktop} {
        padding: 40px 20px;
    }

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

const Grid = styled.div`
    max-height: 400px;
    padding: 24px;
    background: #fff;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--shadow0);
    display: grid;
    grid-auto-flow: column dense;
    gap: 24px;
    grid-template-columns: repeat(9, 160px);
    grid-template-rows: 1fr 1fr;
    overflow: auto;

    @media ${Device.laptop} {
        max-height: 520px;
        grid-template-columns: repeat(9, 220px);
    }

    @media ${Device.desktop} {
        max-height: 660px;
        grid-template-columns: repeat(9, 300px);
    }
`;

type HalfProps = {
    readonly half?: boolean;
};

const Img = styled.div<HalfProps>`
    grid-row-end: ${(props) => (props.half ? "span 1" : "span 2")};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        height: 100%;
        width: auto;
    }
`;

const Servicios = function ({ state }) {
    return (
        <>
            <Container state={state}>
                <Section>
                    <div>
                        <h2>Servicios</h2>
                        <h4>
                            Relación cercana con el cliente promoviendo
                            seguridad y apoyo previo a la compra y posterior a
                            la misma.
                        </h4>
                        <h4>
                            Desarrollo de materiales POP, exhibidores,
                            cartelería, armado de vidrieras, personalización de
                            góndolas y punteras, diseño de afiches, etc.
                        </h4>
                    </div>
                </Section>
                <Grid>
                    <Img>
                        <img src={servicios00} alt="servicios00" />
                    </Img>
                    <Img half>
                        <img src={servicios01} alt="servicios01" />
                    </Img>
                    <Img half>
                        <img src={servicios02} alt="servicios02" />
                    </Img>
                    <Img>
                        <img src={servicios03} alt="servicios03" />
                    </Img>
                    <Img>
                        <img src={servicios04} alt="servicios04" />
                    </Img>
                    <Img half>
                        <img src={servicios05} alt="servicios05" />
                    </Img>
                    <Img half>
                        <img src={servicios06} alt="servicios06" />
                    </Img>
                    <Img>
                        <img src={servicios07} alt="servicios07" />
                    </Img>
                    <Img>
                        <img src={servicios08} alt="servicios08" />
                    </Img>
                    <Img half>
                        <img src={servicios09} alt="servicios09" />
                    </Img>
                    <Img half>
                        <img src={servicios10} alt="servicios10" />
                    </Img>
                    <Img>
                        <img src={servicios11} alt="servicios11" />
                    </Img>
                </Grid>
                <Section>
                    <div>
                        <h4>
                            Desarrollo de eventos para marcas, eventos
                            empresariales, charlas, capacitaciones,
                            degustaciones y exposiciones. Realizados por nuestro
                            personal especializado y/o en conjunto a integrantes
                            de las bodegas. (presenciales o virtuales)
                        </h4>
                    </div>
                </Section>
                <Grid>
                    <Img half>
                        <img src={servicios12} alt="servicios12" />
                    </Img>
                    <Img half>
                        <img src={servicios13} alt="servicios13" />
                    </Img>
                    <Img>
                        <img src={servicios14} alt="servicios14" />
                    </Img>
                    <Img half>
                        <img src={servicios15} alt="servicios15" />
                    </Img>
                    <Img half>
                        <img src={servicios16} alt="servicios16" />
                    </Img>
                    <Img>
                        <img src={servicios17} alt="servicios17" />
                    </Img>
                    <Img half>
                        <img src={servicios18} alt="servicios18" />
                    </Img>
                    <Img half>
                        <img src={servicios19} alt="servicios19" />
                    </Img>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Servicios;
