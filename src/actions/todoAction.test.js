import * as actions from './todo'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'add',
      item: text
    }
    expect(actions.addToList(text)).toEqual(expectedAction)
  })
})

describe('remove action', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'remove',
      item: text
    }
    expect(actions.removeFromList(text)).toEqual(expectedAction)
  })
})