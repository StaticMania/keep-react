'use client'
import { FC, ReactNode, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Checkbox } from '../Checkbox/Checkbox'
import { treeTheme } from './theme'

/**
 * A node for the Tree component.
 * @interface Node
 */
interface Node {
  /**
   * The id of the node.
   * @type {number}
   */
  id: number
  /**
   * The title of the node.
   * @type {string}
   */
  title: string
  /**
   * An array of child nodes.
   * @type {Node[]}
   * @default []
   */
  children?: Node[]
}

/**
 * Props for the Tree component.
 * @interface Props
 */
interface Props {
  /**
   * An array of nodes to be rendered in the tree.
   * @type {Node[]}
   * @default []
   */
  nodes: Node[]

  /**
   * Determines whether to show icons for parent and child nodes.
   * @type {boolean}
   * @default false
   */
  showIcon?: boolean

  /**
   * Determines whether to show the number of items for each node.
   * @type {boolean}
   * @default false
   */
  showItemsNumber?: boolean

  /**
   * Determines whether to show a border around the tree component.
   * @type {boolean}
   * @default false
   */
  showBorder?: boolean

  /**
   * The icon to be displayed for parent nodes.
   * @type {ReactNode}
   * @default ''
   */
  ParentIcon?: ReactNode

  /**
   * The icon to be displayed for child nodes.
   * @type {ReactNode}
   * @default ''
   */
  ChildIcon?: ReactNode

  /**
   * Determines whether to show checkboxes for each node.
   * @type {boolean}
   * @default false
   */
  showCheckbox?: boolean

  /**
   * A callback function to handle the checked state of the checkboxes.
   * @param value - The checked state value.
   * @type {(value: boolean) => void}
   */
  // eslint-disable-next-line no-unused-vars
  handleChecked?: (value: boolean) => void

  /**
   * The CSS class name for the tree component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The CSS style for each tree item.
   * @type {string}
   * @default ''
   */
  itemStyle?: string
}

export const Tree: FC<Props> = ({
  nodes,
  showIcon = false,
  showItemsNumber = false,
  showBorder = false,
  ParentIcon,
  ChildIcon,
  showCheckbox = false,
  className,
  itemStyle,
}) => {
  const [expandedNodes, setExpandedNodes] = useState<{
    [key: number]: boolean
  }>({})

  const theme = treeTheme

  const toggleNode = (id: number) => {
    setExpandedNodes({ ...expandedNodes, [id]: !expandedNodes[id] })
  }

  const renderNode = (node: Node) => {
    const isExpanded = expandedNodes[node.id]

    return (
      <li
        key={node.id}
        className={cn(
          node.children
            ? theme.list.hasChild.on
            : showIcon && !showCheckbox
              ? theme.list.hasChild.off.hasIcon.on
              : !showIcon && showCheckbox
                ? theme.list.hasChild.off.hasIcon.on
                : showIcon && showCheckbox
                  ? theme.list.hasChild.off.hasIcon.on
                  : theme.list.hasChild.off.hasIcon.off,
          theme.list.base,
          itemStyle,
        )}>
        <span className={cn(theme.caretIcon.base)} onClick={() => toggleNode(node.id)}>
          {node.children &&
            !showIcon &&
            (isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3D4A5C" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3D4A5C" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            ))}
          {node.children && showIcon && typeof ParentIcon !== 'undefined' && ParentIcon}
          {!node.children && showIcon && typeof ChildIcon !== 'undefined' && ChildIcon}

          {showCheckbox && <Checkbox />}

          {node.title}
          {node.children && (
            <span className={cn(showItemsNumber ? theme.showChildren.base : theme.showChildren.off)}>
              ({node.children.length})
            </span>
          )}
        </span>
        {node.children && (
          <ul
            className={cn(
              isExpanded ? theme.nestedOrderList.on.base : theme.nestedOrderList.off,
              isExpanded && showBorder && theme.nestedOrderList.on.border.on,
            )}>
            {node.children.map((childNode) => renderNode(childNode))}
          </ul>
        )}
      </li>
    )
  }

  return <ul className={cn(theme.base, className)}>{nodes.map(renderNode)}</ul>
}
