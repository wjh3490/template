import { shallowMount } from '@vue/test-utils'
import BasePagination from '../../src/components/BasePagination.vue'
describe('BasePagination.vue', () => {
    it('toggle click', () => {
        const wrapper = shallowMount(BasePagination, {
            propsData: {
                total: 10
            }
        }
        )
        const mockFn = jest.fn();
    wrapper.setMethods({
      'handleCurrentChange': mockFn
    });
        console.log( wrapper.find('.pagination'))
    wrapper.find('.pagination').vm.$emit('current-change');
    expect(mockFn).toHaveBeenCalledTimes(1);

    })
  
  })