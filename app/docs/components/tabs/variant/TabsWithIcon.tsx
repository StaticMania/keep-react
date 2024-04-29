'use client'
import { HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'
import { TabContent, TabItem, TabList, Tabs } from '../../../../src'

const TabsWithIcon = () => {
  return (
    <Tabs activeLabel="one">
      <TabList>
        <TabItem label="one" className="flex items-center gap-2">
          <HouseLine size={20} />
          Home
        </TabItem>
        <TabItem className="flex items-center gap-2" label="two">
          <User size={20} />
          About
        </TabItem>
        <TabItem className="flex items-center gap-2" label="three">
          <Phone size={20} />
          Contact
        </TabItem>
        <TabItem className="flex items-center gap-2" label="four">
          <Pen size={20} />
          Blogs
        </TabItem>
        <TabItem className="flex items-center gap-2" label="five">
          <SignIn size={20} />
          Sign Up
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

const TabsWithIconCode = `
'use client'
import { TabContent, TabItem, TabList, Tabs } from 'keep-react'
import { HouseLine, Pen, Phone, SignIn, User } from 'phosphor-react'

export const TabsComponent = () => {
  return (
    <Tabs activeLabel="one">
      <TabList>
        <TabItem label="one" className="flex items-center gap-2">
          <HouseLine size={20} />
          Home
        </TabItem>
        <TabItem className="flex items-center gap-2" label="two">
          <User size={20} />
          About
        </TabItem>
        <TabItem className="flex items-center gap-2" label="three">
          <Phone size={20} />
          Contact
        </TabItem>
        <TabItem className="flex items-center gap-2" label="four">
          <Pen size={20} />
          Blogs
        </TabItem>
        <TabItem className="flex items-center gap-2" label="five">
          <SignIn size={20} />
          Sign Up
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

export { TabsWithIcon, TabsWithIconCode }
