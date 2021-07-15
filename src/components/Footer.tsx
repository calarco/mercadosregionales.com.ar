import styled from "styled-components";
import { Device } from "globalStyle";

import logo from "assets/logo.svg";
import instagram from "assets/instagram.svg";
import whatsapp from "assets/whatsapp.svg";

const Container = styled.div`
    width: 100%;
    text-align: center;
    background: #fff;
    border-top: 8px solid var(--secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${Device.laptop} {
        padding: 0px 40px;
    }

    img {
        max-width: 40px;
        margin: 20px;
        filter: brightness(0) saturate(100%) invert(15%) sepia(8%)
            saturate(2880%) hue-rotate(247deg) brightness(95%) contrast(85%);

        @media ${Device.laptop} {
            max-width: 100px;
        }
    }

    a {
        display: inline-block;
        border-radius: 100%;
        line-height: 1;
    }

    a:hover {
        cursor: pointer;
        background-color: var(--on-background-disabled);
        transition: 0.2s ease-out;
    }
`;

const Footer = function () {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <div>
                <p>Diag. Alberdi Norte 2366 - 3er. piso | 7600 Mar del Plata</p>
                <p>ramiro.collarlopez@mercadosregionales.com.ar</p>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/mrmercadosregionales/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="logo" />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5492234366886&text=Ramiro"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={whatsapp} alt="logo" />
                </a>
            </div>
        </Container>
    );
};

export default Footer;
