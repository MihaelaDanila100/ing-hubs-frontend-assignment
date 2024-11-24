import { html, TemplateResult } from 'lit';
import '../src/web-app.js';

export default {
  title: 'WebApp',
  component: 'web-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <web-app style="--web-app-background-color: ${backgroundColor}" .header=${header}></web-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
