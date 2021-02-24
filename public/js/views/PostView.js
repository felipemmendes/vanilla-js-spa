import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor({ params, data }) {
    super({ params, data });
    this.setTitle(`${data.title} | Vanilla JS SPA`);
  }

  async getHTML() {
    return `
      <h1>${this.data.title}</h1>
      <p>
        ${this.data.body}
      </p>
    `;
  }
}
