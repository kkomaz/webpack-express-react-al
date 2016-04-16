import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('renders the parent div', () => {
    let component = renderComponent(App);
    expect(component).to.have.class('app-component');
  });
});
