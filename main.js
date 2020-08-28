import { createElement, render, Component } from './toy-react'
class MyComponent extends Component {
    render() {
        return <div class="demo">
            你好
            {this.children}
        </div>
    }
}

render(
  <MyComponent class="a" id="b">
    <div class="c">222</div>
    <div>333</div>
    </MyComponent>
, document.body);