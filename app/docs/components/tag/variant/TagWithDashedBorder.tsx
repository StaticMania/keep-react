"use client";
import { Tag } from "@/src/components/Tag";
import { CrownSimple, X } from "phosphor-react";
import React, { useState } from "react";

const TagWithDashedBorder = () => {
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
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="error"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="warning"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
    </div>
  );
};

const TagWithDashedBorderCode = `
"use client";
import { Tag } from "keep-design";
import { CrownSimple, X } from "phosphor-react";
import React, { useState } from "react";

const TagWithDashedBorder = () => {
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
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="error"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="warning"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
    </div>
  );
};

export default TagWithDashedBorder;

`;

export { TagWithDashedBorder, TagWithDashedBorderCode };
