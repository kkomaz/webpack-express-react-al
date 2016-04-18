import { renderComponent, expect } from '../test_helper';
import AssistanceRequest from '../../src/containers/assistance_request';

describe('AssistanceRequest', () => {
  const component = renderComponent(AssistanceRequest);

  it('renders the parent div', () => {
    expect(component).to.have.class('assistance-request');
  });

  describe('Form contains all the fields', () => {
    it ('contains first name input text', () => {
      expect(component.find('.assistance-request__first-name-input')).to.exist;
    });

    it ('contains last name input text', () => {
      expect(component.find('.assistance-request__last-name-input')).to.exist;
    });

    it ('contains email address input text', () => {
      expect(component.find('.assistance-request__email-input')).to.exist;
    });

    it ('contains service type select field', () => {
      expect(component.find('.services')).to.exist;
    });

    it ('contains description text area', () => {
      expect(component.find('.assistance-request__description-text')).to.exist;
    });

    it ('contains the checkbox container', () => {
      expect(component.find('.assistance-request__terms')).to.exist;
    });
  });

  describe('Form interaction', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(AssistanceRequest);
    });

    it('displays the first name in the input', () => {
      component.find('.assistance-request__first-name-input').simulate('change', 'Alex');
      expect(component.find('.assistance-request__first-name-input')).to.have.value('Alex');
    });
  });
});
