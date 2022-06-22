import {ActiveUlMenu, MainDiv} from './styled';
import {House, MagnifyingGlass, ShoppingBag, Phone} from "phosphor-react";

export function MenuActive(){
    return(
        <MainDiv>
            <ActiveUlMenu >
                <House  weight="thin" />
                <span>Inicio</span>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <MagnifyingGlass  weight="thin" />
                <span>Sobre</span>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <ShoppingBag  weight="thin" />
                <span>Produtos</span>
            </ActiveUlMenu>
            <ActiveUlMenu>
                <Phone  weight="thin" />
                <span>Contato</span>
            </ActiveUlMenu>
        </MainDiv>
    );
}