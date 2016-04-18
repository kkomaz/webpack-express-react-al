import { renderComponent, expect } from '../test_helper';
import Service from '../../src/containers/service';

describe('Service', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Service);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('services');
  });

  it('defaults to the boilerplate text', () => {
    expect(component.find('.service')).to.have.text('Select Service Type');
  });
});
