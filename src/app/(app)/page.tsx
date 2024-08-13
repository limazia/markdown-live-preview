import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Editor } from "@/components/editor";
import { Markdown } from "@/components/markdown";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-auto bg-white dark:bg-slate-700 flex">
        <div className="flex-1 overflow-y-auto border border-r-2">
          <Editor />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Markdown />
        </div>
      </div>
      <Footer />
    </div>
  );
}
