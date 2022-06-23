import {CabecalhoSite} from "../components/cabecalhoSite/index"
import { MenuSite } from "../components/MenuSite";
import {HeadSite} from './style'
import { GaleriaFotos} from '../components/GaleriaFotos/index'

export function HomePageSite(){
    return(
        <HeadSite>
            <CabecalhoSite />
            <MenuSite />
            <GaleriaFotos />
        </HeadSite>
    );
}