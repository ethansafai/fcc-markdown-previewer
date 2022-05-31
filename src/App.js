import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { MARKDOWN } from "./constants/markdown";

function App() {
  const [markdown, setMarkdown] = useState(MARKDOWN);

  return (
    <div className="flex flex-col gap-4 items-center p-5 max-w-6xl mx-auto">
      <h1 className="text-white text-2xl md:text-3xl text-center font-bold italic">Welcome to the Markdown Playground!</h1>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </div>
  );
}

export default App;
