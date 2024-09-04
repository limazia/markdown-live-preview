export function Footer() {
  return (
    <footer className="w-full h-6 flex items-center justify-center bg-[#444] py-2 px-4 z-10">
      <span className="text-[10px] text-center text-white">
        This is a Next.js version of the website{" "}
        <a
          href="https://markdownlivepreview.com/"
          target="_blank"
          className="font-semibold text-gray-300"
        >
          markdownlivepreview.com
        </a>
      </span>
    </footer>
  );
}
