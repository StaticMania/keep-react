// import classNames from 'classnames';
// import type { ReactNode } from 'react';
// import { FC } from 'react';

// import { Avatar } from '../Avatar/Avatar';
// import { useTheme } from '@/src/Keep/ThemeContex';

// interface CheckboxGroupProps {
//   checkboxType?: 'square' | 'circle';
//   checkboxPosition?: 'left' | 'right';
//   title: string;
//   description?: string;
//   icon?: ReactNode;
//   img?: string;
//   imgShape?: 'square' | 'circle';
//   fieldName?: string;
//   select?: 'single' | 'multiple';
//   value?: string;
//   selected?: string;
//   onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export interface keepCheckboxGroupTheme {
//   label: {
//     base: string;
//     iconRight: {
//       on: string;
//       off: string;
//     };
//     selected: {
//       on: string;
//       off: string;
//     };
//     spacing: string;
//   };

//   main: {
//     order: string;
//     spacing: string;
//   };
//   root: {
//     base: string;
//     icon: {
//       base: string;
//       selected: {
//         on: string;
//         off: string;
//       };
//     };
//     circleImg: {
//       base: string;
//       selected: {
//         on: string;
//         off: string;
//       };
//     };
//     squareImg: {
//       base: string;
//       img: string;
//     };
//   };
//   textBox: {
//     spacing: string;
//     order: string;
//     title: {
//       base: string;
//       selected: {
//         on: string;
//         off: string;
//       };
//     };
//     description: {
//       base: string;
//       selected: {
//         on: string;
//         off: string;
//       };
//     };
//   };
// }

// const CheckboxGroup: FC<CheckboxGroupProps> = ({
//   checkboxType = 'square',
//   title,
//   description,
//   checkboxPosition = 'left',
//   icon,
//   img,
//   imgShape = 'circle',
//   fieldName,
//   select = 'single',
//   value = '',
//   selected,
//   onOptionChange,
// }) => {
//   console.log(select);

//   const theme = useTheme().theme.checkboxGroup;
//   return (
//     <label
//       className={classNames(
//         theme.label.base,
//         checkboxPosition === 'right' || icon || img ? theme.label.iconRight.on : theme.label.iconRight.off,
//         selected === value ? theme.label.selected.on : theme.label.selected.off,
//         imgShape === 'circle' && theme.label.spacing,
//       )}
//     >
//       <div
//         className={classNames(
//           checkboxPosition === 'right' || icon || img ? theme.main.order : '',
//           imgShape === 'square' && theme.main.spacing,
//         )}
//       >
//         <Radio
//           sizing="lg"
//           name={fieldName}
//           radioShape={checkboxType}
//           value={value}
//           selected={selected}
//           onOptionChange={onOptionChange}
//         />
//       </div>
//       <div className={classNames(theme.root.base)}>
//         {!img && typeof icon !== 'undefined' && (
//           <div
//             className={classNames(
//               selected === value ? theme.root.icon.selected.on : theme.root.icon.selected.off,
//               theme.root.icon.base,
//             )}
//           >
//             {icon}
//           </div>
//         )}
//         {img && imgShape === 'circle' && (
//           <div
//             className={classNames(
//               theme.root.circleImg.base,
//               selected === value ? theme.root.circleImg.selected.on : theme.root.circleImg.selected.off,
//             )}
//           >
//             <Avatar img={img} shape="round" />
//           </div>
//         )}
//         {img && imgShape === 'square' && (
//           <div className={classNames(theme.root.squareImg.base)}>
//             <img src={img} alt="" className={classNames(theme.root.squareImg.img)} />
//           </div>
//         )}

//         <div
//           className={classNames(
//             imgShape === 'square' && theme.textBox.spacing,
//             checkboxPosition === 'right' ? theme.textBox.order : '',
//           )}
//         >
//           {title && (
//             <p
//               className={classNames(
//                 theme.textBox.title.base,
//                 selected === value ? theme.textBox.title.selected.on : theme.textBox.title.selected.off,
//               )}
//             >
//               {title}
//             </p>
//           )}

//           {description && (
//             <p
//               className={classNames(
//                 theme.textBox.description.base,
//                 selected === value ? theme.textBox.description.selected.on : theme.textBox.description.selected.off,
//               )}
//             >
//               {description}
//             </p>
//           )}
//         </div>
//       </div>
//     </label>
//   );
// };

// export default CheckboxGroup;
