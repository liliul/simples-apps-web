class Component {
  constructor(props) {
    this.props = props || {};
    this.state = this.getInitialState ? this.getInitialState() : {};
    this._rootElement = null;
    this._render();
  }

  _render() {
    const html = this.render();
    this._rootElement.innerHTML = html;
    this.bindEvents();
  }

  render() {
    throw new Error('Component render method must be implemented');
  }

  bindEvents() {
    // Placeholder for event bindings
  }

  mount(selector) {
    this._rootElement = document.querySelector(selector);
    if (this._rootElement) {
      this._render();
    }
  }
}

class Button extends Component {
  render() {
    return `<button class="button">${this.props.label}</button>`;
  }
}

class Counter extends Component {
  getInitialState() {
    return { count: 0 };
  }

  render() {
    return `
      <div class="component">
        <p>Count: ${this.state.count}</p>
        <button class="button" id="increment">Increment</button>
        <button class="button" id="decrement">Decrement</button>
      </div>
    `;
  }

  bindEvents() {
    this._rootElement.querySelector('#increment').addEventListener('click', () => {
      this.setState({ count: this.state.count + 1 });
    });

    this._rootElement.querySelector('#decrement').addEventListener('click', () => {
      this.setState({ count: this.state.count - 1 });
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this._render();
  }
}
