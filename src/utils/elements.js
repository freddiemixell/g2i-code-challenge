import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export let Title = styled.h1`
    text-align: center;
    font-size: 30px;
`;

export let Container = styled.div`
    margin: 40px 10px;
    text-align: center;
    font-size: 20px;

    .question {
        border: 1px solid black;
        padding: 50px 5px;
    }

    .buttons {
        display: flex;
        width: 200px;
        justify-content: space-between;
        margin: auto;
    }
    @media screen and (min-width: 1000px) {
        .question {
            padding: 50px;
        }
    }
`;

export let Button = styled.button`
    background: #111;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 7px;
    box-shadow: 2px 1px 2px rgb(3 3 3 / 50%);
    font-weight: bold;
    text-transform: uppercase;
`;

export let Link = styled(RouterLink)`
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

export let Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: lightgrey;
    min-height: 100vh;
`;