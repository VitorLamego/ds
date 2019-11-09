import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart, VScroll, Component } from '../ui';
import { MithrilTsxComponent as Component } from 'mithril-tsx-component';


interface IGenericAttrs {
    class?: string | string[];
    id?: string;
    onclick?: Function;
}

}
export abstract class Elem extends Component<Object> {
    // Classe abstrata
}

export class GraphicTabs extends Elem {
    selected: number;

    constructor(vnode) {
        super();
        this.selected = vnode.attrs.selected || 0;
    }

    view(vnode) {
        return <div class="Tabs">
            {this.viewTabs(vnode)}
            {this.viewContent(vnode)}
        </div>
    }

    viewTabs(vnode) {
        let selected = this.selected,
            self = this,
            titles = vnode.children.map((e, i) => {
                let cls = "Graphics Tabs-tab";
                cls += i == selected ? " is-selected" : "";
                let btn = "Warning";
                btn = i == selected ? "primary" : "warning";
                return <div class={cls}
                    onclick={() => {self.selected = i; }}>
                    <GraphicsButton btn={btn}>{e.attrs.title}</GraphicsButton>
                </div>
            });
    return <div class="Graphics Tab-head">{titles}</div>;
    }

    viewContent(vnode) {

        let extraclass = vnode.children[this.selected].attrs.title || ""
        return <div class={`Graphics Tabs-Content ${extraclass}`}>
            {vnode.children[this.selected]}
        </div>
    }
}


interface Sattrs extends IGenericAttrs {
    btn?: "primary" | "success" | "warning" | "error" | "disabled" | "normal";
    title: string;
}

export class Tab extends Component<Sattrs> {


    view(vnode) {
        return <div class="Tab">
            {vnode.children}
        </div>
    }
};

// tipos de butoes


export class GraphicsButton extends Component<Sattrs>{
    view(vnode: m.Vnode<Gbtn>) {
        let extraclass = vnode.attrs.btn;
        return <button type="button" class={`nes-btn is-${extraclass}`}>{vnode.children}</button>
    }