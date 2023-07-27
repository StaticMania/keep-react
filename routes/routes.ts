interface routerPath {
  id: number;
  name: string;
  href: string;
}

export const routes: routerPath[] = [
  { id: 1, name: "Alert", href: "/alert" },
  { id: 2, name: "Avatar", href: "/avatar" },
  { id: 3, name: "Accordion", href: "/accordion" },
  { id: 4, name: "Button", href: "/button" },
];
