interface routerPath {
  id: number;
  name: string;
  href: string;
}

export const routes: routerPath[] = [
  { id: 1, name: "Alert", href: "/docs/components/alert" },
  { id: 2, name: "Avatar", href: "/docs/components/avatar" },
  { id: 3, name: "Avatar Group", href: "/docs/components/avatarGroup" },
  { id: 4, name: "Accordion", href: "/docs/components/accordion" },
  { id: 5, name: "Button", href: "/docs/components/button" },
  { id: 6, name: "Button Group", href: "/docs/components/buttonGroup" },
  { id: 7, name: "Badge", href: "/docs/components/badge" },
  { id: 8, name: "BreadCrumb", href: "/docs/components/breadcrumb" },
  { id: 9, name: "Card", href: "/docs/components/card" },
  { id: 10, name: "Carousel", href: "/docs/components/carousel" },
  { id: 11, name: "Play Button", href: "/docs/components/playButton" },
  { id: 12, name: "Progress", href: "/docs/components/progress" },
  { id: 13, name: "Notification", href: "/docs/components/notification" },
  { id: 14, name: "Tooltip", href: "/docs/components/tooltip" },
  { id: 15, name: "Modal", href: "/docs/components/modal" },
  { id: 16, name: "Rating", href: "/docs/components/rating" },
  { id: 17, name: "Spinner", href: "/docs/components/spinner" },
  { id: 18, name: "Toast", href: "/docs/components/toast" },
  { id: 19, name: "Slider", href: "/docs/components/slider" },
  { id: 20, name: "Tabs", href: "/docs/components/tabs" },
  { id: 21, name: "Sidebar", href: "/docs/components/sidebar" },
  { id: 22, name: "Switch", href: "/docs/components/switch" },
  { id: 23, name: "Skeleton", href: "/docs/components/skeleton" },
  { id: 24, name: "Tag", href: "/docs/components/tag" },
  { id: 25, name: "Table", href: "/docs/components/table" },
  { id: 26, name: "Steps", href: "/docs/components/step" },
  { id: 27, name: "Timeline", href: "/docs/components/timeline" },
  { id: 28, name: "Empty", href: "/docs/components/empty" },
  { id: 29, name: "Statistic", href: "/docs/components/statistic" },
  { id: 30, name: "Upload", href: "/docs/components/upload" },
  { id: 31, name: "Dropdown", href: "/docs/components/dropdown" },
  { id: 32, name: "CheckBox", href: "/docs/components/checkbox" },
  { id: 33, name: "Text Input", href: "/docs/components/textInput" },
  { id: 34, name: "Radio", href: "/docs/components/radio" },
  { id: 35, name: "Text Area", href: "/docs/components/textArea" },
  { id: 36, name: "Number Input", href: "/docs/components/numberInput" },
  { id: 37, name: "Search Bar", href: "/docs/components/searchBar" },
  { id: 38, name: "Date Picker", href: "/docs/components/datePicker" },
  { id: 39, name: "CheckBox Group", href: "/docs/components/checkboxGroup" },
  { id: 40, name: "Tree", href: "/docs/components/tree" },
  { id: 41, name: "Navbar", href: "/docs/components/navbar" },
  { id: 42, name: "Area Chart", href: "/docs/components/areaChart" },
];

export const gettingStartedRoutes: routerPath[] = [
  {
    id: 1,
    name: "Introduction",
    href: "/docs/getting-stated/introduction",
  },
  {
    id: 2,
    name: "Installation",
    href: "/docs/getting-stated/installation",
  },
];

export const navbarRoutes: routerPath[] = [
  {
    id: 1,
    href: "/home",
    name: "Home",
  },
  {
    id: 2,
    href: "/figma",
    name: "Figma",
  },
];
