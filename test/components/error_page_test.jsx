import { renderComponent, expect } from '../test_helper';
import ErrorPage from '../../src/components/error_page';

describe('ErrorPage', () => {
  it('renders the parent div', () => {
    let component = renderComponent(ErrorPage);
    expect(component).to.have.class('error-page');
  });
});
