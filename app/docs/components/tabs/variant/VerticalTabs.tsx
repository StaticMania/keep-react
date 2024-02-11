'use client'
import { CaretRight, HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'
import { Tabs } from '../../../../src'

const VerticalTab = () => {
  return (
    <Tabs activeLabel="one" vertical={true}>
      <Tabs.List>
        <Tabs.Item label="one">
          <HouseLine size={20} />
          Home
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="two">
          <User size={20} />
          About
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="three">
          <Phone size={20} />
          Contact
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="four">
          <Pen size={20} />
          Blogs
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="five">
          <SignIn size={20} />
          Sign Up
          <CaretRight size={20} />
        </Tabs.Item>
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

const VerticalTabCode = `
'use client'
import { CaretRight, HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'
import { Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs activeLabel="one" vertical={true}>
      <Tabs.List>
        <Tabs.Item label="one">
          <HouseLine size={20} />
          Home
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="two">
          <User size={20} />
          About
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="three">
          <Phone size={20} />
          Contact
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="four">
          <Pen size={20} />
          Blogs
          <CaretRight size={20} />
        </Tabs.Item>
        <Tabs.Item label="five">
          <SignIn size={20} />
          Sign Up
          <CaretRight size={20} />
        </Tabs.Item>
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

`

export { VerticalTab, VerticalTabCode }
