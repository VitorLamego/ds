import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';
import sidebarImg from './Imgs/sidebar.jpg';
import {Ações} from './Tabs/Acoes';
import {VisãoGeral} from './Tabs/VisaoGeral'
/**
 * Componente para janela de conspiração.
 */

export class Conspiracy {
    view () {
        return <Window>
            <Sidebar src={sidebarImg} class="conspiracy_sidebar" title="Conspiração" back={true}/>
            <Tabs>
                <Tab title={<button class="nes-btn">Visão Geral</button>}>
                    <VisãoGeral></VisãoGeral>
                </Tab>
                <Tab title={<button class="nes-btn">Subornar</button>}>
                    <Ações text="Selecione a quantidade de seguidores a se subornar" btn_text="Enviar a maleta" btn_expnd="Saber Mais"></Ações>
                </Tab>
            </Tabs>
        </Window>
    }
}