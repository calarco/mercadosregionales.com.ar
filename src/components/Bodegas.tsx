import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { Device } from "globalStyle";
import datos from "datos";

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    @media ${Device.laptop} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const Banner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: 0.2s ease-out;

    img {
        height: 100%;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-out;
`;

const Logo = styled.img`
    max-width: 200px;
    height: auto;
    max-height: 150px;
    transition: 0.15s ease-out;
    filter: saturate(0%);

    @media ${Device.desktop} {
        max-width: 300px;
        max-height: 200px;
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

const Bodega = styled(NavLink)`
    position: relative;
    min-width: 200px;
    max-width: 600px;
    min-height: 200px;
    max-height: 240px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.2s ease-out;

    @media ${Device.laptop} {
        max-width: 280px;
        max-height: 260px;
    }

    @media ${Device.desktop} {
        max-width: 372px;
        max-height: 340px;
    }

    &:hover {
        box-shadow: var(--shadow0);
        transition: 0.2s ease-in;

        ${Banner} {
            opacity: 1;
            transform: scale(1.1);
            transition: 0.2s ease-in;
        }

        ${Overlay} {
            transition: 0.2s ease-in;
        }

        ${Logo} {
            filter: saturate(100%);
            transition: 0.2s ease-in;
        }
    }
`;

const Bodegas = function ({ state }) {
    return (
        <>
            <Container>
                {datos.map(({ id, route, name }) => (
                    <Bodega key={id} to={route}>
                        <Banner>
                            <img src={route + "/banner.jpg"} alt={name} />
                        </Banner>
                        <Overlay>
                            <Logo
                                src={route + "/logo.png"}
                                alt={name}
                                state={state}
                            />
                        </Overlay>
                    </Bodega>
                ))}
            </Container>
        </>
    );
};

export default Bodegas;
