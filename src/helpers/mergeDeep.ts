// source: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

import React from 'react';

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(
  target: Record<string, unknown>,
  ...sources: Record<string, unknown>[]
): Record<string, unknown> {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

//Merge Component

export const mergeChildren = (...components: React.ReactNode[]) =>
  React.Children.toArray(components).reduce<React.ReactNode[]>(
    (merged, child) => (Array.isArray(child) ? merged.concat(child) : merged.concat([child])),
    [],
  );

export function removeFragment(element: JSX.Element) {
  return element.props.children;
}
