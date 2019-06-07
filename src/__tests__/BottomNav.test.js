import React from 'react';
import { shallow } from 'enzyme';

import BottomNav from '../BottomNav';

const navOptions = [
  { value: 'foo', label: 'foo' },
  { value: 'bar', label: 'bar' },
  { value: 'baz', label: 'baz' },
];

describe('<BottomNav/>', () => {
  describe('given some navigation options', () => {
    describe('when displayed', () => {
      it('all the options are shown', () => {
        const wrapper = shallow(
          <BottomNav options={navOptions} onChange={() => {}} />
        );
        expect(
          wrapper
            .children()
            .findWhere(node =>
              navOptions.find(option => option.value === node.prop('value'))
            )
        ).toHaveLength(navOptions.length);
      });

      describe('and a selection is provided', () => {
        it('selects the right option', () => {
          const wrapper = shallow(
            <BottomNav
              options={navOptions}
              selected={navOptions[1].value}
              onChange={() => {}}
            />
          );

          expect(
            wrapper
              .children()
              .findWhere(node => node.prop('value') === navOptions[1].value)
              .prop('checked')
          ).toBe(true);
        });
      });
    });

    describe('when an option is selected', () => {
      it('responds with the selected option', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(
          <BottomNav options={navOptions} onChange={onChangeMock} />
        );

        const firstOption = wrapper.children().first();
        firstOption.simulate('change', {
          target: { value: firstOption.prop('value') },
        });

        expect(onChangeMock).toHaveBeenCalledWith(navOptions[0].value);
      });
    });
  });
});
