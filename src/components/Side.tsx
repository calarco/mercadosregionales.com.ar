import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { Device } from "globalStyle";
import ReactMarkdown from "react-markdown";

type StateProps = {
    readonly state?: string;
    readonly current?: boolean;
};

const Container = styled.div<StateProps>`
    position: fixed;
    z-index: 10;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    background: var(--secondary-variant);
    background-color: #fff;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--shadow0);
    visibility: hidden;
    transition: 0.2s ease-in;
    text-align: center;

    @media ${Device.laptop} {
        z-index: 0;
        top: 170px;
        right: 460px;
        width: 460px;
        height: calc(100vh - 170px);
    }

    @media ${Device.desktop} {
        right: 600px;
        width: 600px;
    }

    ${(props) =>
        props.state === "entered" &&
        css`
            visibility: visible;
            right: 0;
            transform: initial;
            transition: 0.3s ease-out;

            @media ${Device.laptop} {
                right: 0;
            }
        `};
`;

const Img = styled.div`
    overflow: hidden;
    text-align: center;
    display: inline-block;
    width: 100%;
    height: 400px;

    @media ${Device.laptop} {
        height: 460px;
    }

    @media ${Device.desktop} {
        height: 600px;
    }

    img {
        height: 100%;
        width: auto;
    }
`;

const Text = styled.div`
    padding: 16px 0;
    margin: 0 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

    @media ${Device.laptop} {
        margin: 0 40px;
    }

    @media ${Device.desktop} {
        padding: 28px 0;
    }

    h4 {
        color: var(--on-background-variant);
        margin: 12px;
    }

    p {
        text-align: justify;
        margin: 32px 8px;

        @media ${Device.desktop} {
            margin: 40px 20px;
        }
    }

    span {
        font: 300 1.5rem/2.4rem var(--font-family);
        color: var(--on-background-variant);
    }

    strong {
        font-weight: bold;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    padding: 13px;
    margin: 20px;
    line-height: 1;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0);
    color: var(--on-background);
    transition: 0.2s ease-in;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    &:focus {
        box-shadow: var(--shadow1);
        border: 1px solid rgba(0, 0, 0, 0);
    }
`;

const Content = styled.div`
    ${(props) =>
        props.state === "entering"
            ? css`
                  position: absolute;
                  visibility: hidden;
                  opacity: 0;
                  transform: translateX(5%);

                  @media ${Device.laptop} {
                      transform: translateX(-5%);
                  }
              `
            : props.state === "exiting"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transition: 0.15s ease-in;
              `
            : css`
                  visibility: visible;
                  opacity: 1;
                  transform: initial;
                  transition: 0.2s ease-out;
              `};
`;

const Side = function ({ active, setActive, name }) {
    const nodeRef = React.useRef(null);

    return (
        <>
            <Transition
                nodeRef={nodeRef}
                in={active.id !== 0}
                addEndListener={(nodeRef, done) => {
                    nodeRef.addEventListener("transitionend", done, false);
                }}
            >
                {(state) => (
                    <Container state={state}>
                        <Close
                            icon
                            type="button"
                            onClick={() => {
                                setActive({
                                    id: 0,
                                    name: "",
                                    image: "",
                                    description: "",
                                });
                            }}
                        >
                            <i className="material-icons md-24">close</i>
                        </Close>
                        <TransitionGroup component={null}>
                            <Transition key={active.id} timeout={300}>
                                {(state) => (
                                    <Content state={state}>
                                        <Img>
                                            <img
                                                src={active.image}
                                                alt={active.name}
                                            />
                                        </Img>
                                        <Text>
                                            <h4>{name}</h4>
                                            <h3>{active.name}</h3>
                                            <ReactMarkdown>
                                                {active.description}
                                            </ReactMarkdown>
                                        </Text>
                                    </Content>
                                )}
                            </Transition>
                        </TransitionGroup>
                    </Container>
                )}
            </Transition>
        </>
    );
};

export default Side;
