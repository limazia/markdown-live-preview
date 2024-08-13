import { Editor } from "@/components/editor";
import { Markdown } from "@/components/markdown";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex-grow overflow-hidden w-full my-0 mx-auto bg-white dark:bg-slate-700 border flex">
        <div className="overflow-y-scroll basis-2/4 p-0 m-0 whitespace-nowrap align-top border-red-500">
          <Editor />
        </div>

        <div className="overflow-y-scroll basis-2/4 p-0 m-0 whitespace-nowrap align-top border-red-500">
          <Markdown />
        </div>
      </div>

      <Footer />
    </>
  );
}
