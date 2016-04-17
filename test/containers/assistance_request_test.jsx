import { renderComponent, expect } from '../test_helper';
import AssistanceRequest from '../../src/containers/assistance_request';

describe('AssistanceRequest', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(AssistanceRequest);
  });

  it('renders the parent div', () => {
    expect(component).to.have.class('assistance-request');
  });
});
