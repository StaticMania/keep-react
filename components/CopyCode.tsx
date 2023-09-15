"use client";
import { Check, CopySimple } from "phosphor-react";
import useCopy from "~/hooks/useCopy";
import { Badge } from "~/src";

const CopyCode = ({ code }: { code: string }) => {
  const { copy, copyToClipboard } = useCopy();
  return (
    <div className="bg-slate-50 my-5 text-slate-900 p-5 rounded-md relative overflow-x-auto">
      <pre className="text-left">{code.trim()}</pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <Badge
          size="sm"
          colorType="strong"
          badgeType="outline"
          color="gray"
          icon={
            copy ? (
              <Check size={16} weight="light" />
            ) : (
              <CopySimple size={16} weight="light" />
            )
          }
          iconPosition="right"
        />
      </button>
    </div>
  );
};

export default CopyCode;
