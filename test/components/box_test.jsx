import { renderComponent, expect } from '../test_helper';
import Box from '../../src/components/box';

describe('Box', () => {
  it('renders the parent div', () => {
    let component = renderComponent(Box);
    expect(component).to.have.class('box');
  });
});
