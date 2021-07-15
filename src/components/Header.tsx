import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Device } from "globalStyle";
import logo from "assets/logo.svg";
import instagram from "assets/instagram.svg";
import whatsapp from "assets/whatsapp.svg";
import datos from "datos";

type LocationProps = {
    readonly location: string;
};

const Top = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.3s ease-in;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    @media ${Device.laptop} {
    }

    a {
        color: var(--on-secondary);
    }
`;

const Container = styled.div<LocationProps>`
    position: ${(props) =>
        props.location === "/" ||
        props.location === "/nosotros" ||
        props.location === "/servicios"
            ? "static"
            : "fixed"};
    top: 0;
    width: 100vw;
    height: ${(props) =>
        props.location === "/" ||
        props.location === "/nosotros" ||
        props.location === "/servicios"
            ? "380px"
            : "68px"};
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--primary);
    box-shadow: var(--shadow0);
    border-bottom: 8px solid var(--secondary);
    border-bottom: ${(props) =>
        props.location === "/" ||
        props.location === "/nosotros" ||
        props.location === "/servicios"
            ? "8px solid var(--secondary);"
            : "0px solid var(--secondary)"};
    transition: 0.3s ease-out;

    @media ${Device.laptop} {
        z-index: 4;
        height: ${(props) =>
            props.location === "/" ||
            props.location === "/nosotros" ||
            props.location === "/servicios"
                ? "380px"
                : "170px"};
    }

    ${Top} {
        max-height: ${(props) =>
            props.location === "/" ||
            props.location === "/nosotros" ||
            props.location === "/servicios"
                ? "100%"
                : "0%"};
        transition: 0.3s ease-out;

        @media ${Device.laptop} {
            max-height: ${(props) =>
                props.location === "/" ||
                props.location === "/nosotros" ||
                props.location === "/servicios"
                    ? "100%"
                    : "60%"};
        }
    }
`;

const activeClassName = "nav-item-active";

const Logo = styled(NavLink).attrs({
    activeClassName,
})`
    height: 100%;
    padding: 8px 8px 60px 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &.${activeClassName} {
    }

    img {
        height: 100%;
        max-height: 200px;
        padding: 8px;
    }

    @media ${Device.laptop} {
        padding: 8px;
    }
`;

const Links = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Device.laptop} {
        width: auto;
        height: 102px;
        padding: 8px 40px;
    }
`;

const Link = styled(NavLink).attrs({
    activeClassName,
})`
    display: inline-block;
    margin: 0 12px;
    padding: 4px 0;
    font: 500 2rem/2.8rem var(--font-family);
    text-transform: uppercase;
    text-decoration: none;
    color: var(--on-secondary);
    border-bottom: 0px solid rgba(0, 0, 0, 0);
    transition: 0.15s ease-in;

    @media ${Device.laptop} {
        margin: 0 12px;
    }

    &.${activeClassName} {
        border-bottom: 4px solid var(--secondary);
        transition: 0.2s ease-out;
    }

    &:hover {
        border-bottom: 4px solid var(--secondary-variant);
        transition: 0.2s ease-out;
    }
`;

const Social = styled.a`
    color: var(--on-secondary);
    display: inline-block;
    border-radius: 100%;
    line-height: 1;

    &:hover {
        cursor: pointer;
        background-color: var(--on-secondary-variant);
        transition: 0.2s ease-out;
    }

    img {
        margin: 12px;

        @media ${Device.laptop} {
            margin: 20px;
        }
    }
`;

const Bodegas = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media ${Device.laptop} {
        height: 40%;
        padding: 0;
        justify-content: center;
    }
`;

const Back = styled(NavLink)`
    padding: 13px;
    line-height: 1;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0);
    color: var(--on-secondary);
    transition: 0.2s ease-in;

    @media ${Device.laptop} {
        display: none;
    }

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    &:focus {
        box-shadow: var(--shadow1);
        border: 1px solid rgba(0, 0, 0, 0);
    }
`;

const Bodega = styled(NavLink).attrs({
    activeClassName,
})`
    display: none;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    height: 100%;
    padding: 0px 20px;
    border-bottom: 0px solid rgba(0, 0, 0, 0);
    border-right: 1px solid rgba(255, 255, 255, 0);
    border-left: 1px solid rgba(0, 0, 0, 0);
    text-decoration: none;
    font: 400 2.4rem/3.2rem var(--font-family-alt);
    color: var(--on-secondary);
    transition: 0.15s ease-in;

    @media ${Device.laptop} {
        display: flex;
        padding: 0px 24px;
        font: 400 2rem/2.8rem var(--font-family-alt);
    }

    &.${activeClassName} {
        display: flex;
        color: var(--secondary-variant);
        transition: 0.2s ease-out;

        @media ${Device.laptop} {
            box-shadow: var(--shadow1);
            border-bottom: 8px solid var(--secondary);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 1px solid rgba(0, 0, 0, 0.2);
        }
    }

    &:hover {
        border-bottom: 8px solid var(--secondary-variant);
        transition: 0.2s ease-out;
    }
`;

const Header = function ({ location }) {
    return (
        <Container location={location}>
            <Top>
                <Logo exact to="/">
                    <img src={logo} alt="logo" />
                </Logo>
                <Links>
                    <Link to="/" exact>
                        Catalogo
                    </Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/servicios">Servicios</Link>
                    <Social
                        href="https://www.instagram.com/mrmercadosregionales/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={instagram} alt="logo" />
                    </Social>
                    <Social
                        href="https://api.whatsapp.com/send?phone=5492234366886&text=Ramiro"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={whatsapp} alt="logo" />
                    </Social>
                </Links>
            </Top>
            <Bodegas>
                <Back to="/">
                    <i className="material-icons md-24">arrow_back</i>
                </Back>
                {datos.map(({ id, route, name }) => (
                    <Bodega key={id} to={route}>
                        {name}
                    </Bodega>
                ))}
            </Bodegas>
        </Container>
    );
};

export default Header;
