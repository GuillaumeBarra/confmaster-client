import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #7e43d7;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color : #fff;
    display: flex;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        text-decoration: underline;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    padding-top: 6px;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    height: 2vh;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    padding: 1.7vh 2vw;
    color: #7e43d7;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #A571F3;
        color: #fff;
    }
`