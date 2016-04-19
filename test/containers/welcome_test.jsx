import { renderComponent, expect } from '../test_helper';
import Welcome from '../../src/containers/welcome';

describe('Welcome', () => {
  it('renders the parent div', () => {
    let component = renderComponent(Welcome);
    expect(component).to.have.class('welcome-page');
  });
});
