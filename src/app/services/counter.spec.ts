import { CounterService } from './counter.service'

describe('CounterService', () => {
let component = new CounterService

it( 'Should increment counter by 1', () => {
  component.increase()
  expect(component.counter).toBe(1)
})

})
