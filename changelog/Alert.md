# Interface Differences Documentation

## Prop Names:

- **Interface 1:** Includes props like `replace`, `BtnStyle`, and `BtnReplace`, which are not present in Interface 2.
- **Interface 2:** Includes props like `additionalContent`, `color`, `iconStyle`, `title`, and `titleStyle`, which are not present in Interface 1.

## Color Prop Type:

- **Interface 1:** The `color` prop is explicitly defined as a string with specific values ('primary' | 'success' | 'warning' | 'error' | 'metal').
- **Interface 2:** The `color` prop is defined to be of type `keyof AlertColors`, suggesting that the color prop should match keys in the `AlertColors` type (presumably defined elsewhere).

## Additional Props:

- **Interface 1:** Includes a catch-all `[key: string]: any;` at the end, allowing for any additional props not explicitly defined in the interface.
- **Interface 2:** Does not have a catch-all for any additional props.

## Title and Icon Styling:

- **Interface 2:** Includes props like `iconStyle` and `titleStyle` for styling the icon and title, which are not present in Interface 1.
