import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor({ params }) {
    super({ params });
    this.setTitle('Settings');
  }

  async getHTML() {
    return `
      <h1>Settings</h1>
      <p>
        Manage your privacy and configuration.
      </p>
    `;
  }
}
