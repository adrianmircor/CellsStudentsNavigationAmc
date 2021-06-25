import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsStudentsNavigationAmc-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-students-navigation-amc></cells-students-navigation-amc>
```

##styling-doc

@customElement cells-students-navigation-amc
*/
export class CellsStudentsNavigationAmc extends LitElement {
  static get is() {
    return 'cells-students-navigation-amc';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  _goToHome() {
    this.dispatchEvent(
      new CustomEvent('clicked-home', {
        bubbles: true,
        composed: true,
        detail: {
          route: 'home'
        },
      })
    );
  }

  _goToStudents() {
    this.dispatchEvent(
      new CustomEvent('clicked-students', {
        bubbles: true,
        composed: true,
        detail: {
          route: 'students'
        },
      })
    );
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-students-navigation-amc-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <div class="topnav">
        <a 
          @click=${this._goToHome}>
          Home
        </a>
        <a 
          @click=${this._goToStudents}>
          Students
        </a>
      </div>
    `;
  }
}
