export class Modal  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE RECEBEU {n} SEGUIDORES</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}