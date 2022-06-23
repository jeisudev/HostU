import {CabecalhoSite} from "../../components/cabecalhoSite/index"
import { MenuSite } from "../../components/MenuSite";
import {HeadSite} from './style'

export function HomePageSite(){
    return(
        <HeadSite>
            <CabecalhoSite />
            <MenuSite />
        </HeadSite>
    );
}