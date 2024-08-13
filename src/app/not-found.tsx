import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[100vh] items-center justify-center space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl uppercase">
          404!
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Page not found
        </p>
      </div>

      <Link
        href="/"
        className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Back to home page
      </Link>
    </div>
  );
}
