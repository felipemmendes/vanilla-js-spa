import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor({ params }) {
    super({ params });
    this.setTitle('Vanilla JS SPA');
  }

  async getHTML() {
    return `
      <h1>Welcome!</h1>
      <p>
        This is an SPA made with vanilla JS!
      </p>
    `;
  }
}
