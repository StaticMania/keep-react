// Importing necessary components from the ComponentsList file
import {
  TreeComponent,
  BarChartComponent,
  CheckboxGroupComponent,
  DatePickerComponent,
  RadioSelectComponent,
  ModalComponent,
  SliderComponet,
  TooltipComponent,
  PaginationComponent,
} from "~/components/ComponentsList";

// Defining an interface for the structure of each route
interface routerPath {
  id: number; // Unique identifier for the route
  name: string; // Name of the route
  href: string; // URL path of the route
  tag?: boolean; // Optional property to tag the route
  deprecate?: boolean; // Optional property to mark the route as deprecated
  redirect?: boolean; // Optional property to mark the route as a redirect
  folderName?: string; // Optional property for the folder name of the route's component
}

// Exporting an array of routes, each adhering to the routerPath interface

export const routes: routerPath[] = [
  {
    id: 1,
    name: "Alert",
    href: "/docs/components/alert",
    tag: false,
    deprecate: false,
    folderName: "Alert",
  },
  {
    id: 2,
    name: "Accordion",
    href: "/docs/components/accordion",
    tag: false,
    deprecate: false,
    folderName: "Accordion",
  },

  {
    id: 3,
    name: "Area Chart",
    href: "/docs/components/areaChart",
    tag: false,
    deprecate: false,
    folderName: "Chart",
  },
  {
    id: 4,
    name: "Avatar",
    href: "/docs/components/avatar",
    tag: false,
    deprecate: false,
    folderName: "Avatar",
  },
  {
    id: 5,
    name: "Avatar Group",
    href: "/docs/components/avatarGroup",
    tag: false,
    deprecate: false,
    folderName: "Avatar",
  },
  {
    id: 6,
    name: "Badge",
    folderName: "Badge",
    href: "/docs/components/badge",
    tag: false,
    deprecate: false,
  },
  {
    id: 43,
    name: "Bar Chart",
    folderName: "Chart",
    href: "/docs/components/barChart",
    tag: false,
    deprecate: false,
  },
  {
    id: 7,
    name: "BreadCrumb",
    folderName: "Breadcrumb",
    href: "/docs/components/breadcrumb",
    tag: false,
    deprecate: false,
  },
  {
    id: 8,
    name: "Button",
    folderName: "Button",
    href: "/docs/components/button",
    tag: false,
    deprecate: false,
  },
  {
    id: 9,
    name: "Button Group",
    folderName: "Button",
    href: "/docs/components/buttonGroup",
    tag: false,
    deprecate: false,
  },
  {
    id: 10,
    name: "Card",
    folderName: "Card",
    href: "/docs/components/card",
    tag: false,
    deprecate: false,
  },
  {
    id: 11,
    name: "Carousel",
    folderName: "Carousel",
    href: "/docs/components/carousel",
    tag: false,
    deprecate: false,
  },
  {
    id: 12,
    name: "CheckBox",
    folderName: "CheckBox",
    href: "/docs/components/checkbox",
    tag: false,
    deprecate: false,
  },
  {
    id: 13,
    name: "CheckBox Group",
    folderName: "CheckboxGroup",
    href: "/docs/components/checkboxGroup",
    tag: false,
    deprecate: false,
  },
  {
    id: 14,
    name: "Date Picker",
    folderName: "DatePicker",
    href: "/docs/components/datePicker",
    tag: false,
    deprecate: false,
  },
  {
    id: 15,
    name: "Dropdown",
    folderName: "Dropdown",
    href: "/docs/components/dropdown",
    tag: false,
    deprecate: false,
  },
  {
    id: 16,
    name: "Empty",
    folderName: "Empty",
    href: "/docs/components/empty",
    tag: false,
    deprecate: false,
  },
  {
    id: 17,
    name: "Modal",
    folderName: "Modal",
    href: "/docs/components/modal",
    tag: false,
    deprecate: false,
  },
  {
    id: 18,
    name: "Navbar",
    folderName: "Navbar",
    href: "/docs/components/navbar",
    tag: false,
    deprecate: false,
  },
  {
    id: 19,
    name: "Notification",
    folderName: "Notification",
    href: "/docs/components/notification",
    tag: false,
    deprecate: false,
  },
  {
    id: 20,
    name: "Number Input",
    folderName: "FormControls",
    href: "/docs/components/numberInput",
    tag: false,
    deprecate: false,
  },
  {
    id: 21,
    name: "Play Button",
    folderName: "PlayButton",
    href: "/docs/components/playButton",
    tag: false,
    deprecate: false,
  },
  {
    id: 22,
    name: "Progress",
    folderName: "Progress",
    href: "/docs/components/progress",
    tag: false,
    deprecate: false,
  },
  {
    id: 44,
    name: "Pagination",
    folderName: "Pagination",
    href: "/docs/components/pagination",
    tag: false,
    deprecate: false,
  },
  {
    id: 45,
    name: "Popover",
    folderName: "Popover",
    href: "/docs/components/popover",
    tag: false,
    deprecate: false,
  },
  {
    id: 23,
    name: "Radio",
    folderName: "FormControls",
    href: "/docs/components/radio",
    tag: false,
    deprecate: false,
  },
  {
    id: 24,
    name: "Rating",
    folderName: "Rating",
    href: "/docs/components/rating",
    tag: false,
    deprecate: false,
  },
  {
    id: 25,
    name: "Search Bar",
    folderName: "SearchBar",
    href: "/docs/components/searchBar",
    tag: false,
    deprecate: false,
  },
  {
    id: 26,
    name: "Sidebar",
    folderName: "Sidebar",
    href: "/docs/components/sidebar",
    tag: false,
    deprecate: false,
  },
  {
    id: 27,
    name: "Skeleton",
    folderName: "Skeleton",
    href: "/docs/components/skeleton",
    tag: false,
    deprecate: false,
  },
  {
    id: 28,
    name: "Slider",
    folderName: "Slider",
    href: "/docs/components/slider",
    tag: false,
    deprecate: false,
  },
  {
    id: 29,
    name: "Spinner",
    folderName: "Spinner",
    href: "/docs/components/spinner",
    tag: false,
    deprecate: false,
  },
  {
    id: 30,
    name: "Statistic",
    folderName: "Statistic",
    href: "/docs/components/statistic",
    tag: false,
    deprecate: false,
  },
  {
    id: 31,
    name: "Steps",
    folderName: "Steps",
    href: "/docs/components/steps",
    tag: false,
    deprecate: false,
  },
  {
    id: 32,
    name: "Switch",
    folderName: "FormControls",
    href: "/docs/components/switch",
    tag: false,
    deprecate: false,
  },
  {
    id: 33,
    name: "Table",
    folderName: "Table",
    href: "/docs/components/table",
    tag: false,
    deprecate: false,
  },
  {
    id: 34,
    name: "Tabs",
    folderName: "Tabs",
    href: "/docs/components/tabs",
    tag: false,
    deprecate: false,
  },
  {
    id: 35,
    name: "Tag",
    folderName: "Tag",
    href: "/docs/components/tag",
    tag: false,
    deprecate: false,
  },
  {
    id: 36,
    name: "Text Area",
    folderName: "FormControls",
    href: "/docs/components/textArea",
    tag: false,
    deprecate: false,
  },
  {
    id: 37,
    name: "Text Input",
    folderName: "FormControls",
    href: "/docs/components/textInput",
    tag: false,
    deprecate: false,
  },
  {
    id: 38,
    name: "Timeline",
    folderName: "Timeline",
    href: "/docs/components/timeline",
    tag: false,
    deprecate: false,
  },
  {
    id: 39,
    name: "Tooltip",
    folderName: "Tooltip",
    href: "/docs/components/tooltip",
    tag: false,
    deprecate: false,
  },
  {
    id: 40,
    name: "Tree",
    folderName: "Tree",
    href: "/docs/components/tree",
    tag: false,
    deprecate: false,
  },
  {
    id: 41,
    name: "Upload",
    folderName: "Upload",
    href: "/docs/components/upload",
    tag: false,
    deprecate: false,
  },
];

// Exporting an array of routes for the Getting Started section

export const gettingStartedRoutes: routerPath[] = [
  {
    id: 1,
    name: "Introduction",
    href: "/docs/getting-started/Introduction",
  },
];

// Exporting an array of routes for the Navbar section

export const navbarRoutes: routerPath[] = [
  {
    id: 1,
    href: "https://keepdesign.io",
    name: "Figma",
    redirect: true,
  },
  {
    id: 2,
    href: "/docs/getting-started/Introduction",
    name: "Documentation",
    redirect: false,
  },
];

// Exporting an array of routes for the Components section

export const ComponentList: {
  id: number;
  href: string;
  component: () => JSX.Element;
}[] = [
  {
    id: 1,
    href: "/docs/components/pagination",
    component: PaginationComponent,
  },
  {
    id: 2,
    href: "/docs/components/tree",
    component: TreeComponent,
  },
  {
    id: 3,
    href: "/docs/components/modal",
    component: ModalComponent,
  },
  {
    id: 4,
    href: "/docs/components/tooltip",
    component: TooltipComponent,
  },
  {
    id: 5,
    href: "/docs/components/barChart",
    component: BarChartComponent,
  },
  {
    id: 6,
    href: "/docs/components/checkboxGroup",
    component: CheckboxGroupComponent,
  },

  {
    id: 7,
    href: "/docs/components/radio",
    component: RadioSelectComponent,
  },

  {
    id: 8,
    href: "/docs/components/slider",
    component: SliderComponet,
  },
  {
    id: 9,
    href: "/docs/components/datePicker",
    component: DatePickerComponent,
  },
];
