import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { CaretDown, CaretRight } from "phosphor-react";
import { ReactNode, useState } from "react";

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
        className={classNames(
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
          className={classNames(theme.caretIcon.base)}
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
            <input
              type="checkbox"
              className="h-5 w-5 rounded border border-slate-200 shadow-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
            />
          )}

          {node.title}
          {node.children && (
            <span
              className={classNames(
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
            className={classNames(
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

  return <ul className={classNames(theme.base)}>{nodes.map(renderNode)}</ul>;
};
