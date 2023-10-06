"use client";
import { Check, CopySimple } from "phosphor-react";
import useCopy from "~/hooks/useCopy";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import { Skeleton } from "~/src";

const CopyCode = ({ code }: { code: string }) => {
  const { copy, copyToClipboard } = useCopy();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="my-5 relative">
      {isClient ? (
        <SyntaxHighlighter
          language="javascript"
          style={coldarkDark}
          customStyle={{
            borderRadius: "8px",
            backgroundColor: "#1C222B",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      ) : (
        <Skeleton animation={true}>
          <Skeleton.Line height="h-[60px]" />
        </Skeleton>
      )}

      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        {copy ? (
          <Check size={20} weight="light" color="#fff" />
        ) : (
          <CopySimple size={20} weight="light" color="#fff" />
        )}
      </button>
    </div>
  );
};

export default CopyCode;
