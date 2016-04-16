import { renderComponent, expect } from '../test_helper';
import Index from '../../src/containers/index';

describe('Index', () => {
  it('renders the parent div', () => {
    let component = renderComponent(Index);
    expect(component).to.have.class('index');
  });
});
