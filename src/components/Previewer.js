import { marked } from "marked";
import { useEffect, useRef } from "react";

const Previewer = ({ markdown }) => {
  const html = marked.parse(markdown, {
    breaks: true,
    gfm: true,
    headerIds: false,
  });
  const previewRef = useRef(null);

  useEffect(() => {
    previewRef.current.innerHTML = html;
  }, [html]);

  return (
    <div className="container">
      <h1>Preview</h1>
      <div
        id="preview"
        className="flex flex-col gap-4 p-2 bg-blue-100 overflow-x-scroll md:overflow-hidden"
        ref={previewRef}
      ></div>
    </div>
  );
};

export default Previewer;
