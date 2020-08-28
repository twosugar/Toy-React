class NodeWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(key, value) {
        this.root.setAttribute(key, value)
    }

    appendChild(component) {
        this.root.appendChild(component.root)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
        this._root = null
    }

    setAttribute(key, value) {
        this.props[key] = value
    }

    appendChild(component) {
        this.children.push(component)
    }

    get root() {
        if (!this._root) {
            this._root = this.render().root
        }

        return this._root
    }
}

export const createElement = (type, attributes, ...children) => {
    let dom;
    if (typeof type === 'string') {
        dom = new NodeWrapper(type)
    } else {
        dom = new type
    }
    console.log(attributes, children)
    let insertChildren = (children) => {
        for (const key in attributes) {
            dom.setAttribute(key, attributes[key]);
        }
        for (let item of children) {
            if (typeof item === 'string') {
                item = new TextWrapper(item)
            }
            if (typeof item === 'object' && item instanceof Array) {
                insertChildren(item)
            } else {
                dom.appendChild(item)
            }
        }
    }
    insertChildren(children)

    return dom
}

export const render = (component, parentElement) => {
    parentElement && parentElement.appendChild(component.root)
}