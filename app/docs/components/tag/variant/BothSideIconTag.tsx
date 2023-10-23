"use client";
import { useState } from "react";
import { Tag } from "~/src";
import { CrownSimple, X } from "phosphor-react";

const BothSideIconTag = () => {
  const [dismiss, setDismiss] = useState(false);
  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag
        disabled={true}
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="error"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="warning"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
    </div>
  );
};

const BothSideIconTagCode = `
"use client";
import { Tag } from "keep-react";
import { useState } from "react";
import { CrownSimple, X } from "phosphor-react";

export const TagComponent = () => {
  const [dismiss, setDismiss] = useState(false);
  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag
        disabled={true}
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="error"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="warning"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={false}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
      >
        Tag
      </Tag>
    </div>
  );
}
`;

export { BothSideIconTag, BothSideIconTagCode };
