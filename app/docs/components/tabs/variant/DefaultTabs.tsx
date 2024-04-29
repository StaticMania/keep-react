import { TabContent, TabItem, TabList, Tabs } from '../../../../src'

const DefaultTabs = () => {
  return (
    <Tabs activeLabel="one">
      <TabList>
        <TabItem label="one">Home</TabItem>
        <TabItem label="two">About</TabItem>
        <TabItem label="three">Contact</TabItem>
        <TabItem label="four">Blogs</TabItem>
        <TabItem label="five">Sign Up</TabItem>
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

const DefaultTabsCode = `
import { TabContent, TabItem, TabList, Tabs } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tabs activeLabel="one">
      <TabList>
        <TabItem label="one">Home</TabItem>
        <TabItem label="two">About</TabItem>
        <TabItem label="three">Contact</TabItem>
        <TabItem label="four">Blogs</TabItem>
        <TabItem label="five">Sign Up</TabItem>
      </TabList>
      <TabContent label="one">Home</TabContent>
      <TabContent label="two">About Content</TabContent>
      <TabContent label="three">Contact Content</TabContent>
      <TabContent label="four">Blogs Content</TabContent>
      <TabContent label="five">Sign Up Content</TabContent>
    </Tabs>
  )
}
`

export { DefaultTabs, DefaultTabsCode }
