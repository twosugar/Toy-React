for (const it of [1,2,3,4]) {
    console.log(it)
}

const createElement = (tagName, attributes, ...children) => {
    let dom = document.createElement(tagName)
    for (const key in attributes) {
        dom.setAttribute(key, attributes[key]);
    }
    console.log(children);
    for (let item of children) {
        if (typeof item === 'string') {
            item = document.createTextNode(item)
        }
        dom.appendChild(item)
    }

    return dom
}

window.a = (
  <div class="a" id="b">
    <div></div>
    <div></div>
  </div>
);