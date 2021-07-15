import React, { useState, useEffect } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import styled, { css } from "styled-components";
import { Device } from "globalStyle";

const Container = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 148px;
    overflow: hidden;
    margin: 8px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: 0.15s ease-out;

    @media ${Device.laptop} {
        width: 204px;
        margin: 16px;
    }

    @media ${Device.desktop} {
        width: 274px;
    }

    ${(props) =>
        props.current &&
        css`
            box-shadow: var(--shadow0);
            transition: 0.3s ease-in;
        `};

    &:hover {
        ${(props) =>
            !props.current &&
            css`
                cursor: pointer;
                border: 1px solid rgba(0, 0, 0, 0.2);
                transition: 0.2s ease-out;
            `};
    }

    span {
        font: 300 1.5rem/2.4rem var(--font-family);
        color: var(--on-background-variant);
    }
`;

const Spinner = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    background-color: #0006;
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
    animation: sk-scaleout 1s infinite ease-in-out;

    @keyframes sk-scaleout {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }
`;

const Img = styled.div`
    width: 100%;
    height: 140px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    transition: 0.15s ease-out;

    @media ${Device.laptop} {
        height: 204px;
    }

    @media ${Device.desktop} {
        height: 274px;
    }

    img {
        height: 100%;
        width: auto;
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

const Title = styled.div`
    margin: 24px 0;
`;

const Item = function ({ id, name, image, description, active, setActive }) {
    const nodeRef = React.useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = () => {
            console.error("Error loading image");
        };
    }, [image]);

    return (
        <>
            <Container
                current={id === active.id ? true : false}
                onClick={() => {
                    setActive({
                        id: id,
                        name: name,
                        image: image,
                        description: description,
                    });
                }}
            >
                <SwitchTransition mode="out-in">
                    <Transition
                        nodeRef={nodeRef}
                        key={!loading ? "bar" : "foo"}
                        addEndListener={(nodeRef, done) => {
                            nodeRef.addEventListener(
                                "transitionend",
                                done,
                                false
                            );
                        }}
                        unmountOnExit
                        mountOnEnter
                    >
                        {(state) => (
                            <>
                                <Img state={state}>
                                    {loading ? (
                                        <Spinner />
                                    ) : (
                                        <img src={image} alt={name} />
                                    )}
                                </Img>
                            </>
                        )}
                    </Transition>
                </SwitchTransition>
                <Title>
                    <h4>{name}</h4>
                </Title>
            </Container>
        </>
    );
};

export default Item;
