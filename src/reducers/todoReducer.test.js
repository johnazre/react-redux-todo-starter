import reducer from './todo'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle adding the todo', () => {
    expect(
      reducer([], {
        type: 'add',
        item: 'Run the tests'
      })
    ).toEqual(
      [
        {
          title: 'Run the tests',
          completed: false,
          id: 0
        }
      ]
    )

    expect(
      reducer(
        [
          {
            title: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: 'add',
          item: 'Run the tests'
        }
      )
    ).toEqual(
      [
        {
          title: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          title: 'Run the tests',
          completed: false,
          id: 1
        }
      ]
    )
  })
})