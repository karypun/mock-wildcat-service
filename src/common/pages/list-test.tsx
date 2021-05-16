import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A, Details, Table, Tabs, Tag } from '@not-govuk/components';
import { Pagination } from '@hods/components';



const Page: FC<PageProps> = props => (
  <Fragment>
  <h1>Review applications</h1>
  <Tabs
items={[
  {
    label: "To review",
    id: "to-review",
    content: (
      <Fragment>
        <h2>To review</h2>
        <Table
          keys={["application", "species", "status"]}
          headings={{
            application: "Application",
            species: "Species",
            status: "Status",
          }}
          data={[
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Savannah",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Bengal",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Ocelot",
              status: <Tag classModifiers="blue">new</Tag>,
            },
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Savannah",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Ocelot",
              status: <Tag classModifiers="blue">new</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Ocelot",
              status: <Tag classModifiers="blue">new</Tag>,
            },
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Savannah",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Eurasian lynx",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Ocelot",
              status: <Tag classModifiers="blue">new</Tag>,
            },
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Geoffroy's cat",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Bengal",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Ocelot",
              status: <Tag classModifiers="blue">new</Tag>,
            },
          ]}
        />
        <Pagination
          results={249}
          resultsPerPage={25}
          page={3}
        />
      </Fragment>
    ),
  },
  {
    label: "Granted",
    id: "granted",
    content: (
      <Fragment>
        <h2>Granted</h2>
        <Table
          keys={["application", "species", "status"]}
          headings={{
            application: "Application",
            species: "Species",
            status: "Status",
          }}
          data={[
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Savannah",
              status: <Tag classModifiers="blue">new</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Geoffroy's cat",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Ocelot",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
          ]}
        />
      </Fragment>
    ),
  },
  {
    label: "Refused",
    id: "refused",
    content: (
      <Fragment>
        <h2>Refused</h2>
        <Table
          keys={["application", "species", "status"]}
          headings={{
            application: "Application",
            species: "Species",
            status: "Status",
          }}
          data={[
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Savannah",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Ocelot",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Eurasian lynx",
              status: <Tag classModifiers="blue">new</Tag>,
            },
          ]}
        />
      </Fragment>
    ),
  },
  {
    label: "On hold",
    id: "on-hold",
    content: (
      <Fragment>
        <h2>On hold</h2>
        <Table
          keys={["application", "species", "status"]}
          headings={{
            application: "Application",
            species: "Species",
            status: "Status",
          }}
          data={[
            {
              application: <A href="/case-1">F1-56720</A>,
              species: "Bengal",
              status: <Tag classModifiers="red">urgent</Tag>,
            },
            {
              application: <A href="/case-2">F4-45221</A>,
              species: "Geoffroy's cat",
              status: <Tag classModifiers="green">renew</Tag>,
            },
            {
              application: <A href="/case-3">F2-90024</A>,
              species: "Savannah",
              status: <Tag classModifiers="blue">new</Tag>,
            },
          ]}
        />
      </Fragment>

    ),
  },
]}
/>
  </Fragment>

);

export default Page;
export const title = 'Home';
