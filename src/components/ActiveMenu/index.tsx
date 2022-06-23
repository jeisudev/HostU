import {ActiveUlMenu, MainDiv} from './styled';
import {House, MagnifyingGlass, ShoppingBag, Phone} from "phosphor-react";
import {Link} from "react-router-dom";

export function MenuActive(){
    return(
        <MainDiv>
            <ActiveUlMenu >
                <House  weight="thin" />
                <Link to="/" className='linkActive' >Inicio</Link>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <MagnifyingGlass  weight="thin" />
                <Link to="sobre" className='linkActive' >Sobre</Link>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <ShoppingBag  weight="thin" />
                <Link to="produtos" className='linkActive' >Produtos</Link>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <Phone  weight="thin" />
                <Link to="contato" className='linkActive' >Contato</Link>
            </ActiveUlMenu>
        </MainDiv>
    );
}