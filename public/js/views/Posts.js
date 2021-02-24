import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor({ params, data }) {
    super({ params, data });
    this.setTitle('Posts | Vanilla JS SPA');
  }

  async getHTML() {
    return `
      <h1>Posts</h1>
      <p>
        Here are the latest posts:
      </p>
      <ul>
        ${this.data
          .map((d) => {
            return `
            <li>
              <a href="/posts/${d.id}" data-link>${d.title}</a>
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
  }
}
