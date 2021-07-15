import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import styled, { css } from "styled-components";
import GlobalStyle, { Device } from "globalStyle";
import datos from "datos";

import Header from "components/Header";
import Home from "Home";
import Empresa from "Empresa";
import Nosotros from "Nosotros";
import Servicios from "Servicios";

type StateProps = {
    readonly state?: string;
};

const Container = styled.div<StateProps>`
    position: ${(props) =>
        props.location === "/" ||
        props.location === "/nosotros" ||
        props.location === "/servicios"
            ? "static"
            : "fixed"};
    z-index: 1;
    top: 68px;
    height: ${(props) =>
        props.location === "/" ||
        props.location === "/nosotros" ||
        props.location === "/servicios"
            ? "auto"
            : "calc(100vh - 68px)"};
    width: 100%;
    overflow: auto;

    @media ${Device.laptop} {
        top: 170px;
        height: ${(props) =>
            props.location === "/" ||
            props.location === "/nosotros" ||
            props.location === "/servicios"
                ? "auto"
                : "calc(100vh - 170px)"};
    }

    ${(props) =>
        props.state === "entering"
            ? css`
                  visibility: hidden;
                  opacity: 0;
              `
            : props.state === "exiting"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transition: 0.2s ease-in;
              `
            : css`
                  visibility: visible;
                  opacity: 1;
                  transform: initial;
                  transition: 0.3s ease-out;
              `};
`;

const App = function () {
    return (
        <Router>
            <GlobalStyle />
            <Route
                render={({ location }) => (
                    <>
                        <Header location={location.pathname} />
                        <TransitionGroup component={null}>
                            <Transition key={location.key} timeout={300}>
                                {(state) => (
                                    <Container
                                        location={location.pathname}
                                        state={state}
                                    >
                                        <Switch
                                            key={location.key}
                                            location={location}
                                        >
                                            <Route
                                                exact
                                                path="/"
                                                render={() => (
                                                    <Home state={state} />
                                                )}
                                            />
                                            <Route
                                                path="/nosotros"
                                                render={() => (
                                                    <Nosotros state={state} />
                                                )}
                                            />
                                            <Route
                                                path="/servicios"
                                                render={() => (
                                                    <Servicios state={state} />
                                                )}
                                            />
                                            {datos.map(
                                                ({
                                                    id,
                                                    route,
                                                    name,
                                                    text,
                                                    collections,
                                                }) => (
                                                    <Route
                                                        key={id}
                                                        path={route}
                                                        render={() => (
                                                            <Empresa
                                                                route={route}
                                                                name={name}
                                                                text={text}
                                                                collections={
                                                                    collections
                                                                }
                                                                state={state}
                                                            />
                                                        )}
                                                    />
                                                )
                                            )}
                                        </Switch>
                                    </Container>
                                )}
                            </Transition>
                        </TransitionGroup>
                    </>
                )}
            />
        </Router>
    );
};

export default App;
