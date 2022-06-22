import {MainNav, LinkComponent, DivLocation, DivActive} from './style';
import {House, MagnifyingGlass, ShoppingBag, Phone, List} from "phosphor-react";
import {LogoImg} from '../LogoImg/index';
import {MenuActive} from '../ActiveMenu/index'
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
                    <span>Inicio</span>
                </LinkComponent>
                <LinkComponent>
                    <MagnifyingGlass  weight="thin" />
                    <span>Sobre</span>
                </LinkComponent>
                <LogoImg />
                <LinkComponent>
                    <ShoppingBag  weight="thin" />
                    <span>Produtos</span>
                </LinkComponent>
                <LinkComponent>
                    <Phone  weight="thin" />
                    <span>Contato</span>
                </LinkComponent>
            </DivLocation>
        </MainNav>
    );
}