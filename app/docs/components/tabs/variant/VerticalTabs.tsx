'use client'
import { CaretRight, HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'
import { TabContent, TabItem, TabList, Tabs } from '../../../../src'

const VerticalTab = () => {
  return (
    <Tabs activeLabel="one" vertical={true}>
      <TabList>
        <TabItem label="one">
          <HouseLine size={20} />
          Home
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="two">
          <User size={20} />
          About
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="three">
          <Phone size={20} />
          Contact
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="four">
          <Pen size={20} />
          Blogs
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="five">
          <SignIn size={20} />
          Sign Up
          <CaretRight size={20} />
        </TabItem>
      </TabList>
      <TabContent label="one">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
      <TabContent label="two">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </TabContent>
      <TabContent label="three">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
      <TabContent label="four">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </TabContent>
      <TabContent label="five">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
    </Tabs>
  )
}

const VerticalTabCode = `
'use client'
import { TabContent, TabItem, TabList, Tabs } from 'keep-react'
import { CaretRight, HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'

export const TabsComponent = () => {
  return (
    <Tabs activeLabel="one" vertical={true}>
      <TabList>
        <TabItem label="one">
          <HouseLine size={20} />
          Home
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="two">
          <User size={20} />
          About
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="three">
          <Phone size={20} />
          Contact
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="four">
          <Pen size={20} />
          Blogs
          <CaretRight size={20} />
        </TabItem>
        <TabItem label="five">
          <SignIn size={20} />
          Sign Up
          <CaretRight size={20} />
        </TabItem>
      </TabList>
      <TabContent label="one">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
      <TabContent label="two">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </TabContent>
      <TabContent label="three">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
      <TabContent label="four">
        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was
        a greater artist than now.
      </TabContent>
      <TabContent label="five">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
        with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
        of souls like mine.
      </TabContent>
    </Tabs>
  )
}

`

export { VerticalTab, VerticalTabCode }
