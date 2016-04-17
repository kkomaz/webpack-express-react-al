import { renderComponent, expect } from '../test_helper';
import Index from '../../src/components/index';

/*eslint-disable */
describe('Index', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Index);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('unite-us-index');
  });

  it('shows the service list', () => {
    expect(component.find('.services')).to.exist;
  });
});
