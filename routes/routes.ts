interface routerPath {
  id: number;
  name: string;
  href: string;
}

export const routes: routerPath[] = [
  { id: 1, name: "Alert", href: "/alert" },
  { id: 2, name: "Avatar", href: "/avatar" },
  { id: 3, name: "Avatar Group", href: "/avatarGroup" },
  { id: 4, name: "Accordion", href: "/accordion" },
  { id: 5, name: "Button", href: "/button" },
];
