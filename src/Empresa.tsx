import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Device } from "globalStyle";

import Side from "components/Side";
import Item from "components/Item";

const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;

    img {
        height: 100%;
        width: auto;
    }
`;

const Info = styled.div`
    text-align: center;

    @media ${Device.laptop} {
        position: absolute;
        top: 0;
        right: 0;
        width: 460px;
        height: 100%;
        overflow-y: auto;
    }

    @media ${Device.desktop} {
        width: 600px;
    }

    ${(props) =>
        props.state === "entering"
            ? css`
                  visibility: hidden;
                  opacity: 0;
                  transform: translateY(-5%);
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

    ${Img} {
        background: #000;
        width: 100%;
        max-height: 212px;
        border-radius: 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);

        @media ${Device.laptop} {
            max-height: 300px;
        }

        @media ${Device.desktop} {
            max-height: 380px;
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 0px;
        }
    }
`;

const Logo = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    margin: 0 28px;

    @media ${Device.laptop} {
        margin: 0 40px;
    }

    @media ${Device.desktop} {
        padding: 32px 0;
    }

    img {
        max-height: 128px;
        max-width: 240px;

        @media ${Device.laptop} {
            max-height: 140px;
            max-width: 300px;
        }

        @media ${Device.desktop} {
            max-height: 200px;
            max-width: 340px;
        }
    }
`;

const Text = styled.div`
    padding: 16px 0;
    margin: 0 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    text-align: justify;

    @media ${Device.laptop} {
        margin: 0 40px;
    }

    @media ${Device.desktop} {
        padding: 28px 0;
    }

    p {
        margin: 12px 8px;

        @media ${Device.desktop} {
            margin: 12px 20px;
        }
    }

    strong {
        font-weight: bold;
    }
`;

const Collections = styled.div`
    background-color: #fff;
    box-shadow: var(--shadow0);
    text-align: center;

    @media ${Device.laptop} {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: calc(100% - 460px);
        height: 100%;
        padding: 0 40px;
        overflow-y: auto;
    }

    @media ${Device.desktop} {
        width: calc(100% - 600px);
    }
`;

const Collection = styled.div`
    padding: 16px 0;
    border-bottom: 1px solid #0003;
    transition: 0.15s ease-out;

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

const Productos = function ({ route, name, text, collections, state }) {
    const [active, setActive] = useState({
        id: 0,
        name: "",
        image: "",
        description: "",
    });

    return (
        <>
            <Info state={state}>
                <Img>
                    <img src={route + "/banner.jpg"} alt={"banner"} />
                </Img>
                <Logo>
                    <img src={route + "/logo.png"} alt="logo" />
                </Logo>
                <Text>
                    {text.split("\n").map((i, key) => {
                        return <p key={key}>{i}</p>;
                    })}
                </Text>
            </Info>
            <Collections>
                {collections.map(({ id, items }) => (
                    <Collection key={id} state={state}>
                        {items.map(({ id, name, image, description }) => (
                            <Item
                                key={id}
                                id={id}
                                name={name}
                                image={route + image}
                                description={description}
                                active={active}
                                setActive={setActive}
                            />
                        ))}
                    </Collection>
                ))}
            </Collections>
            <Side active={active} setActive={setActive} name={name} />
        </>
    );
};

export default Productos;
