import {MainNav, LinkComponent, DivLocation, DivActive} from './style';
import {House, MagnifyingGlass, ShoppingBag, Phone, List} from "phosphor-react";
import {LogoImg} from '../LogoImg/index';
import {MenuActive} from '../ActiveMenu/index';
import { Link } from "react-router-dom";
import { useState } from 'react';

export function MenuSite(){
    const [active, setActive] = useState(false);
    const mudarClass = () => {
        setActive(!active)
    }
    return(
        <MainNav>
            <DivLocation >
                <List weight="fill" onClick={mudarClass} className="MenuBtn" />
                    <DivActive className={active ? 'ativado': ''} >
                        <MenuActive />
                    </DivActive>
                <LinkComponent >
                    <House  weight="thin" />
                    <Link to="/">inicio</Link>
                </LinkComponent>
                <LinkComponent>
                    <MagnifyingGlass  weight="thin" />
                    <Link to="sobre">Sobre</Link>
                </LinkComponent>
                <LogoImg />
                <LinkComponent>
                    <ShoppingBag  weight="thin" />
                    <Link to="produtos">Produtos</Link>
                </LinkComponent>
                <LinkComponent>
                    <Phone  weight="thin" />
                    <Link to="contato">Contato</Link>
                </LinkComponent>
            </DivLocation>
        </MainNav>
    );
}