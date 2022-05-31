import { useRef } from "react";

const Editor = ({ markdown, setMarkdown }) => {
  const inputRef = useRef(null);

  const handleChange = () => {
    setMarkdown(inputRef.current.value);
  };

  return (
    <div className="container">
      <h1>Editor</h1>
      <textarea
        id="editor"
        ref={inputRef}
        value={markdown}
        onChange={handleChange}
        className="p-2 font-bold outline-none bg-blue-100 h-32 rounded-none"
      ></textarea>
    </div>
  );
};

export default Editor;
