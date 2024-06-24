---
title: 'Keep React V1.4.0'
date: 'June 24, 2024'
description: 'Most of the component structures are changed but the UI looks the same as before. In v1.3.0, we used components with a (.) syntax, but now we can use components with detailed JSX tags like `AlertContainer`.'
author: Md Ariful Islam
slug: keep-react-v1.4.0
keyFeatures:
  - 'Update Alert Structure'
  - 'Carousel Structure update'
  - 'Update Breadcrumb Structure'
  - 'Alert Structure update'
  - 'Update Table Structure'
  - 'Upload Structure update'
  - 'And more...'
---

## Release Notes

Welcome to the latest release of Keep React! This version brings several improvements and updates to our components while maintaining the familiar UI look and feel.

## Alert

The Alert component structure has been updated for better consistency. Here are the changes:

- `Alert.Container` is now `AlertContainer`
- `Alert.Body` is now `AlertBody`
- `Alert.Dismiss` is now `AlertDismiss`
- `Alert.Link` is now `AlertLink`
- `Alert.Icon` is now `AlertIcon`
- `Alert.Title` is now `AlertTitle`
- `Alert.Description` is now `AlertDescription`

```jsx
import { Alert, AlertContainer, AlertDescription, AlertDismiss, AlertIcon, AlertLink, AlertTitle } from 'keep-react'

const AlertComponent = () => {
  return (
    <Alert color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Alert here</AlertTitle>
        <AlertDescription>A short description followed by two actions items.</AlertDescription>
      </AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss />
    </Alert>
  )
}

export default AlertComponent
```

## Carousel

We have revamped the Carousel component structure. Here are the changes:

- `Carousel.Control` is now `CarouselControl`
- `Carousel.Buttons` is now `CarouselButtons`
- `Carousel.Item` is now `CarouselItem`
- `Carousel.Slides` is now `CarouselSlides`
- `Carousel.Indicators` is now `CarouselIndicators`
- `Carousel.PrevButton` is now `CarouselPrevButton`
- `Carousel.NextButton` is now `CarouselNextButton`

```jsx
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react'

const CarouselComponent = () => (
  return (
    <Carousel>
      <CarouselSlides>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20 dark:border-metal-900 dark:bg-metal-900">
              <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">{index + 1}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  )
}

export default CarouselComponent
```

## Card, Modal, Accordion, and More

Similarly, other components like Card, Modal, Accordion, and many more have undergone structural updates for consistency and clarity.

## Updated Component List

- [`Accordion`](/docs/components/accordion)
- [`Alert`](/docs/components/alert)
- [`Avatar`](/docs/components/avatar)
- [`Breadcrumb`](/docs/components/breadcrumb)
- [`ButtonGroup`](/docs/components/buttonGroup)
- [`Card`](/docs/components/card)
- [`Carousel`](/docs/components/carousel)
- [`Drawer`](/docs/components/drawer)
- [`Dropdown`](/docs/components/dropdown)
- [`Empty`](/docs/components/empty)
- [`Input`](/docs/components/input)
- [`Modal`](/docs/components/modal)
- [`Navbar`](/docs/components/navbar)
- [`Notification`](/docs/components/notification)
- [`Number Input`](/docs/components/numberInput)
- [`Pagination`](/docs/components/pagination)
- [`Popover`](/docs/components/popover)
- [`Progress`](/docs/components/progress)
- [`Rating`](/docs/components/rating)
- [`Sidebar`](/docs/components/sidebar)
- [`Skeleton`](/docs/components/skeleton)
- [`Slider`](/docs/components/slider)
- [`Steps`](/docs/components/steps)
- [`Table`](/docs/components/table)
- [`Tabs`](/docs/components/tabs)
- [`Timeline`](/docs/components/timeline)
- [`Upload`](/docs/components/upload)

## Dark Mode

With the release of Keep React v.1.4.0, dark mode is now available for all components. Enhance your user interface with this sleek new feature and provide a better experience for users who prefer darker themes.

## Next Js Server and Client Component

Starting from this version, you can now use Keep components in our Next.js server components without the need for the "use client" directive. Even though our components are still client-side components, they can seamlessly integrate with Next.js server components, offering greater flexibility in your project architecture.

## Contributors

This release was made possible by:

- [Arifulislam5577](https://github.com/Arifulislam5577)
