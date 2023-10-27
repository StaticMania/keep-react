import { useTheme } from "../../Keep/ThemeContex";
import { twMerge } from "tailwind-merge";
import { CaretDown, CaretRight } from "phosphor-react";
import { ReactNode, useState } from "react";
import { CheckBox } from "../CheckBox";

interface Node {
  id: number;
  title: string;
  children?: Node[];
}
interface Props {
  nodes: Node[];
  showIcon?: boolean;
  showItemsNumber?: boolean;
  showBorder?: boolean;
  ParentIcon?: ReactNode;
  ChildIcon?: ReactNode;
  showCheckbox?: boolean;
  handleChecked?: (value: boolean) => void;
}

export interface keepTreeTheme {
  base: string;
  list: {
    base: string;
    hasChild: {
      on: string;
      off: {
        hasIcon: {
          on: string;
          off: string;
        };
      };
    };
  };
  caretIcon: {
    base: string;
    icon: string;
  };

  showChildren: {
    base: string;
    on: string;
    off: string;
  };

  nestedOrderList: {
    on: {
      base: string;
      border: {
        on: string;
        off: string;
      };
    };
    off: string;
  };
}

export const Tree: React.FC<Props> = ({
  nodes,
  showIcon = false,
  showItemsNumber = false,
  showBorder = false,
  ParentIcon,
  ChildIcon,
  showCheckbox = false,
  handleChecked,
}) => {
  const [expandedNodes, setExpandedNodes] = useState<{
    [key: number]: boolean;
  }>({});

  const theme = useTheme().theme.tree;

  const toggleNode = (id: number) => {
    setExpandedNodes({ ...expandedNodes, [id]: !expandedNodes[id] });
  };

  const renderNode = (node: Node) => {
    const isExpanded = expandedNodes[node.id];

    return (
      <li
        key={node.id}
        className={twMerge(
          node.children
            ? theme.list.hasChild.on
            : showIcon && !showCheckbox
            ? theme.list.hasChild.off.hasIcon.on
            : !showIcon && showCheckbox
            ? theme.list.hasChild.off.hasIcon.on
            : showIcon && showCheckbox
            ? theme.list.hasChild.off.hasIcon.on
            : theme.list.hasChild.off.hasIcon.off,
          theme.list.base
        )}
      >
        <span
          className={twMerge(theme.caretIcon.base)}
          onClick={() => toggleNode(node.id)}
        >
          {node.children &&
            !showIcon &&
            (isExpanded ? (
              <CaretDown size={20} color="#3D4A5C" weight="fill" />
            ) : (
              <CaretRight size={20} color="#3D4A5C" weight="fill" />
            ))}
          {node.children &&
            showIcon &&
            typeof ParentIcon !== "undefined" &&
            ParentIcon}
          {!node.children &&
            showIcon &&
            typeof ChildIcon !== "undefined" &&
            ChildIcon}

          {showCheckbox && (
            <CheckBox
              size="md"
              variant="square"
              id="tree"
              color="info"
              handleChecked={handleChecked}
            />
          )}

          {node.title}
          {node.children && (
            <span
              className={twMerge(
                showItemsNumber
                  ? theme.showChildren.base
                  : theme.showChildren.off
              )}
            >
              ({node.children.length})
            </span>
          )}
        </span>
        {node.children && (
          <ul
            className={twMerge(
              isExpanded
                ? theme.nestedOrderList.on.base
                : theme.nestedOrderList.off,
              isExpanded && showBorder && theme.nestedOrderList.on.border.on
            )}
          >
            {node.children.map((childNode) => renderNode(childNode))}
          </ul>
        )}
      </li>
    );
  };

  return <ul className={twMerge(theme.base)}>{nodes.map(renderNode)}</ul>;
};
