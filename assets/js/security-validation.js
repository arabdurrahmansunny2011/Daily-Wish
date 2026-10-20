/* Buttons and common forms */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:focus-visible, a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 3px solid rgba(137, 115, 232, 0.38);
  outline-offset: 3px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #ac9af4);
  color: #fff;
  box-shadow: 0 18px 32px rgba(137, 115, 232, 0.25);
}

.btn-secondary {
  background: rgba(255,255,255,0.7);
  color: var(--text);
  border: 1px solid rgba(137, 115, 232, 0.12);
}

.btn-ghost {
  background: transparent;
  border: 1px solid rgba(137, 115, 232, 0.18);
  color: var(--text);
}

.maker-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 24px;
  padding: 36px 0 80px;
}

.editor-panel,
.preview-panel {
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(137, 115, 232, 0.08);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
  padding: 24px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.field-group {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--text);
  font-weight: 600;
  font-size: 0.94rem;
}

input[type="text"],
input[type="email"],
input[type="date"],
textarea,
select {
  width: 100%;
  border: 1px solid rgba(137, 115, 232, 0.14);
  background: rgba(255,255,255,0.8);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

input[type="color"] {
  width: 100%;
  min-height: 44px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.preview-surface {
  background: linear-gradient(135deg, #fff8f9, #f3f0ff);
  border-radius: 22px;
  min-height: 420px;
  padding: 22px;
  border: 1px solid rgba(137, 115, 232, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.preview-surface .item-card {
  background: rgba(255,255,255,0.76);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 22px;
  width: min(100%, 420px);
}

.preview-surface .item-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.preview-surface .item-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--muted);
}

.preview-surface .mini-image {
  width: 100%;
  height: 180px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ffe4ec, #e3f3ff);
  margin-bottom: 18px;
}

.status-banner {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(226, 247, 238, 0.9);
  color: #206d52;
  font-size: 0.8rem;
  font-weight: 700;
}

.status-banner.warning {
  background: rgba(255, 244, 211, 0.9);
  color: #8d6b00;
}

@media (max-width: 920px) {
  .maker-layout {
    grid-template-columns: 1fr;
  }
}
