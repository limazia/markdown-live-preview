export function Header() {
  return (
    <header>
      <div id="menu-items">
        <div>
          <a href="/">Markdown Live Preview</a>
        </div>
        <div id="reset-button">
          <a href="#">Reset</a>
        </div>
        <div id="copy-button">
          <a href="#">Copy</a>
        </div>
        <div id="sync-button">
          <input type="checkbox" id="sync-scroll-checkbox" />
          <label htmlFor="sync-scroll-checkbox">Sync scroll</label>
        </div>
      </div>
      <div id="github">
        <a href="https://github.com/tanabe/markdown-live-preview">
          <img src="image/GitHub-Mark-Light-32px.webp" />
        </a>
      </div>
    </header>
  );
}
