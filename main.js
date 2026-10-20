import { sanitizeText } from './security-validation.js';

export class MakerEditor {
  constructor(options = {}) {
    this.form = options.form;
    this.preview = options.preview;
    this.fields = options.fields || [];
    this.onChange = options.onChange || (() => {});
    this.history = [];
    this.historyIndex = -1;
    this.dirty = false;
    this.bind();
  }

  bind() {
    if (!this.form) return;
    this.form.addEventListener('input', (event) => {
      const target = event.target;
      if (!target.name) return;
      this.pushHistory();
      this.onChange(this.getState());
    });
  }

  pushHistory() {
    const snapshot = this.getState();
    this.history.push(JSON.parse(JSON.stringify(snapshot)));
    if (this.history.length > 30) this.history.shift();
    this.historyIndex = this.history.length - 1;
  }

  getState() {
    const state = {};
    this.fields.forEach((field) => {
      const element = this.form?.querySelector(`[name="${field}"]`);
      if (!element) return;
      state[field] = sanitizeText(element.value || '');
    });
    return state;
  }

  undo() {
    if (this.historyIndex <= 0) return;
    this.historyIndex -= 1;
    this.applySnapshot(this.history[this.historyIndex]);
  }

  redo() {
    if (this.historyIndex >= this.history.length - 1) return;
    this.historyIndex += 1;
    this.applySnapshot(this.history[this.historyIndex]);
  }

  applySnapshot(snapshot) {
    Object.entries(snapshot).forEach(([key, value]) => {
      const input = this.form?.querySelector(`[name="${key}"]`);
      if (input) {
        input.value = value;
      }
    });
    this.onChange(snapshot);
  }

  updatePreview(renderFn) {
    if (this.preview) {
      renderFn(this.getState(), this.preview);
    }
  }
}
