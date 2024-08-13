export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <div id="container">
        <div id="edit" className="column">
          <div id="editor-wrapper">
            <div id="editor"></div>
          </div>
        </div>
        <div id="preview" className="column">
          <div id="preview-wrapper">
            <div id="output" className="content markdown-body"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
