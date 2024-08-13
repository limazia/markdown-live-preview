export function Footer() {
  return (
    <footer className="w-full h-10 flex items-center justify-center text-xs text-white bg-[#444] py-2 px-4 z-10">
      <div>
        <span>
          This is a Next.js version of the website{" "}
          <a
            href="https://markdownlivepreview.com/"
            target="_blank"
            className="font-semibold text-gray-300"
          >
            markdownlivepreview.com
          </a>
        </span>
      </div>
    </footer>
  );
}
