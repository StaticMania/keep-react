import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
SyntaxHighlighter.registerLanguage("tsx", tsx);
const CssThemePreview = ({ code }: { code: string }) => {
  return (
    <div className="mt-5">
      <SyntaxHighlighter
        language="tsx"
        style={dracula}
        customStyle={{
          maxHeight: "380px",
        }}
      >
        {JSON.stringify(code, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CssThemePreview;
