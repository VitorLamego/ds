import {Illums} from '../components/Illums'
import silvio from '../Imgs/silvio.jpg';
import michael from '../Imgs/michael.jpg';
import algore from '../Imgs/al gore.jpg';
import bill from '../Imgs/bill.jpg';
import jeff from '../Imgs/jeff.jpg';
import joesley from '../Imgs/joesley.jpg';
import obama from '../Imgs/obama.jpg';
import optimus from '../Imgs/optimus.jpg';
import papa from '../Imgs/papa.jpg';
import putin from '../Imgs/putin.jpg';
import rainha from '../Imgs/rainha.jpg';
import xi from '../Imgs/xi.jpg';
 
export class Ações {
    view (vnode) {

        let btn_expnd = vnode.attrs.btn_expnd;
        let pop = "#"

        return <div class="Conspiracy_Tabs">
            <Illums title="Al Gore" img={algore} btn_expnd={btn_expnd} link={pop + "AlGore"} nome="AlGore" texto_fundo_img=""></Illums>
            <Illums title="Bill Gates" img={bill} btn_expnd={btn_expnd} link={pop + "BillGates"} nome="BillGates" texto_fundo_img=""></Illums>
            <Illums title="Jeff Bezos" img={jeff} btn_expnd={btn_expnd} link={pop + "JeffBezos"} nome="JeffBezos" texto_fundo_img=""></Illums>
            <Illums title="Joesley" img={joesley} btn_expnd={btn_expnd} link={pop + "Joesley"} nome="Joesley" texto_fundo_img=""></Illums>
            <Illums title="Michael Jackson" img={michael} btn_expnd={btn_expnd} link={pop + "MichaelJackson"} nome="MichaelJackson" texto_fundo_img=""></Illums>
            <Illums title="Obama" img={obama} btn_expnd={btn_expnd} link={pop + "Obama"} nome="Obama" texto_fundo_img=""></Illums>
            <Illums title="Optimus Prime" img={optimus} btn_expnd={btn_expnd} link={pop + "OptimusPrime"} nome="OptimusPrime" texto_fundo_img=""></Illums>
            <Illums title="Papa Francisco" img={papa} btn_expnd={btn_expnd} link={pop + "PapaFrancisco"} nome="PapaFrancisco" texto_fundo_img=""></Illums>
            <Illums title="Putin" img={putin} btn_expnd={btn_expnd} link={pop + "Putin"} nome="Putin" texto_fundo_img=""></Illums>
            <Illums title="Rainha Elizabeth II" img={rainha} btn_expnd={btn_expnd} link={pop + "Rainha"} nome="Rainha" texto_fundo_img=""></Illums>
            <Illums title="Silvio Santos" img={silvio} btn_expnd={btn_expnd} link={pop + "SilvioSantos"} nome="SilvioSantos" texto_fundo_img=""></Illums>
            <Illums title="Xi Jinping" img={xi} btn_expnd={btn_expnd} link={pop + "XiJinping"} nome="XiJinping" texto_fundo_img=""></Illums>

        </div>
    }
}