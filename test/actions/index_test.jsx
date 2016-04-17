import { expect } from '../test_helper';
import * as ActionTypes from '../../src/constants/action_types';
import { fetchServices } from '../../src/actions'

/*eslint-disable*/
describe('actions', () => {
  describe('fetchServices', () => {
    it('has the correct action type', () => {
      const action = fetchServices();
      expect(action.type).to.equal(ActionTypes.FETCH_SERVICES);
    });
  })
})
