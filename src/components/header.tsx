import { GitHub } from "./icons/GitHub";

export function Header() {
  return (
    <header className="w-full h-[40px] flex items-center justify-between text-xs text-white bg-[#444] py-2 px-4">
      <div className="flex items-center gap-5">
        <a href="/">Markdown Live Preview</a>

        <div id="reset-button">
          <a href="#">Reset</a>
        </div>
        <div id="copy-button">
          <a href="#">Copy</a>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="sync-scroll-checkbox" />
          <label htmlFor="sync-scroll-checkbox">Sync scroll</label>
        </div>
      </div>

      <a href="https://github.com/limazia/markdown-live-preview">
        <GitHub className="size-5" />
      </a>
    </header>
  );
}
