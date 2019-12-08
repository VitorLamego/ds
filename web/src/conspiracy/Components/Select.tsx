import {Modal} from './Modal';

export class Select {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let Valor = vnode.attrs.text;
        let btn_text = vnode.attrs.btn_text || "Botão sem título";
        let multp = vnode.attrs.multiplicador || 1000;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>{Valor}: {this.select()} </li>
                <li>Custa U$ {this.value()}</li>
                <li><Modal n={this.nFollowers()} btn_text={btn_text} link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 10000;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}