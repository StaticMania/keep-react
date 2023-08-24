import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkDark,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
SyntaxHighlighter.registerLanguage("tsx", tsx);
const CssThemePreview = ({ code }: { code: string }) => {
  return (
    <div className="mt-5">
      <SyntaxHighlighter
        language="jsx"
        style={coldarkDark}
        customStyle={{
          maxHeight: "420px",
          borderRadius: "6px",
          paddingLeft: "40px",
          paddingBottom: "20px",
          marginTop: "0px",
          background: "#1C222B",
          fontSize: "14px",
          lineHeight: "28px",
          letterSpacing: "-0.2px",
        }}
      >
        {JSON.stringify(code, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CssThemePreview;
