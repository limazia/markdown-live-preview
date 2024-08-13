import { GitHub } from "./icons/GitHub";

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="/">Markdown Live Preview</a>

          <div id="reset-button">
            <a href="#">Reset</a>
          </div>
          <div id="copy-button">
            <a href="#">Copy</a>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="sync-scroll-checkbox" />
            <label htmlFor="sync-scroll-checkbox">Sync scroll</label>
          </div>
        </div>

        <a href="https://github.com/limazia/markdown-live-preview">
          <GitHub className="size-6" />
        </a>
      </div>
    </header>
  );
}
