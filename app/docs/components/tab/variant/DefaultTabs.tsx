import { Tab, TabContent, TabItem, TabList } from '../../../../src'
import { Content } from './Content'

const DefaultTabs = () => {
  return (
    <Tab activeLabel="startup">
      <TabList>
        <TabItem label="startup">Startup</TabItem>
        <TabItem label="business">Business</TabItem>
        <TabItem label="agency">Agency</TabItem>
      </TabList>
      <TabContent value="startup">
        <Content title="Startup" />
      </TabContent>
      <TabContent value="business">
        <Content title="Business" />
      </TabContent>
      <TabContent value="agency">
        <Content title="Agency" />
      </TabContent>
    </Tab>
  )
}

const DefaultTabsCode = `
import { Tab, TabContent, TabItem, TabList } from 'keep-react'

export const TabsComponent = () => {
  return (
    <Tab activeLabel="startup">
      <TabList>
        <TabItem label="startup">Startup</TabItem>
        <TabItem label="business">Business</TabItem>
        <TabItem label="agency">Agency</TabItem>
      </TabList>
      <TabContent value="startup">
        // Startup Content
      </TabContent>
      <TabContent value="business">
        // Business Content
      </TabContent>
      <TabContent value="agency">
        // Agency Content
      </TabContent>
    </Tab>
  )
}

`

export { DefaultTabs, DefaultTabsCode }
