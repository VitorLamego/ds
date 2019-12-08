import {Card, CardTEXTO} from './card';
import {Select} from './Select';

export class Illums {
    view(vnode){
        
        let btn_expnd = vnode.attrs.btn_expnd;
        let image = vnode.attrs.img;
        let title = vnode.attrs.title || "Sem Título";
        let text = vnode.attrs.text || "Sem Texto";
        let btn_text = vnode.attrs.btn_text || "Botão sem texto";
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div>
            <Card title={title} img={image} btn_expnd={btn_expnd}>
                <p class="consp_intro">Para conseguir mais seguidores o suborno é uma ótima opção! Escolha um illuminatti e suborne seus seguidores para que eles se juntem a você. Porém, optando por este caminho você terá de pagar um alto preço e também haverão cosequências negativas!</p>
                <CardTEXTO title="Apagar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inimizade.</a></li>
                        <li><a><Select text={text} btn_text={btn_text} link={link + "Apagar"} nome={nome + "Apagar"}></Select></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Cooptar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inimizade.</a></li>
                        <li><a><Select text={text} btn_text={btn_text} link={link + "Cooptar"} nome={nome + "Cooptar"}></Select></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Evoluir" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inimizade.</a></li>
                        <li><a><Select text={text} btn_text={btn_text} link={link + "Evoluir"} nome={nome + "Evoluir"}></Select></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Presentear" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inimizade.</a></li>
                        <li><a><Select text={text} btn_text={btn_text} link={link + "Presentear"} nome={nome + "Presentear"}></Select></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Subornar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inimizade.</a></li>
                        <li><a><Select text={text} btn_text={btn_text} link={link + "Subornar"} nome={nome + "Subornar"}></Select></a></li>
                    </ul>
                </CardTEXTO>
            </Card>
        </div>
    }
}