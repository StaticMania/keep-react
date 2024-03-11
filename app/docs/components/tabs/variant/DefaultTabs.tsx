'use client'
import { Tabs } from '../../../../src'

const DefaultTabs = () => {
  return (
    <Tabs activeLabel="one">
      <Tabs.List>
        <Tabs.Item label="one">Home</Tabs.Item>
        <Tabs.Item label="two">About</Tabs.Item>
        <Tabs.Item label="three">Contact</Tabs.Item>
        <Tabs.Item label="four">Blogs</Tabs.Item>
        <Tabs.Item label="five">Sign Up</Tabs.Item>
      </Tabs.List>
      <Tabs.Content label="one">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </Tabs.Content>
      <Tabs.Content label="two">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </Tabs.Content>
      <Tabs.Content label="three">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </Tabs.Content>
      <Tabs.Content label="four">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </Tabs.Content>
      <Tabs.Content label="five">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </Tabs.Content>
    </Tabs>
  )
}

const DefaultTabsCode = `
"use client";
import { Tabs } from "keep-react";

export const TabsComponent = () => {
  return (
    <Tabs activeLabel="one">
      <Tabs.List>
        <Tabs.Item label="one">Home</Tabs.Item>
        <Tabs.Item label="two">About</Tabs.Item>
        <Tabs.Item label="three">Contact</Tabs.Item>
        <Tabs.Item label="four">Blogs</Tabs.Item>
        <Tabs.Item label="five">Sign Up</Tabs.Item>
      </Tabs.List>
      <Tabs.Content label="one">Home</Tabs.Content>
      <Tabs.Content label="two">About Content</Tabs.Content>
      <Tabs.Content label="three">Contact Content</Tabs.Content>
      <Tabs.Content label="four">Blogs Content</Tabs.Content>
      <Tabs.Content label="five">Sign Up Content</Tabs.Content>
    </Tabs>
  )
}
`

export { DefaultTabs, DefaultTabsCode }
