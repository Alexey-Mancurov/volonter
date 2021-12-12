import tabsToggle from "./tabsToogle"
describe('copmleted functions', () => {
    test('action is completed with index', () => {
        let data
        const action = (a) => {
            data = a
        }
        tabsToggle(action, null, true, 1)
        expect(data).toBe(1)
    })

    test('action is completed with data and e', () => {
        let data
        const action = (a) => {
            data = a
        }
        tabsToggle(action, null, false, null, {
            c: 1,
            b: 'a'
        }, {})
        expect(data).toEqual({
            c: 1,
            b: 'a'
        }, {})
    })

    test('setActive is completed with index', () => {
        let data
        const setActive = (a) => {
            data = a
        }
        tabsToggle(null, setActive, false, 2)
        expect(data).toBe(2)
    })
})

describe('crush functions', () => {
    test('action not crush without isIndex', () => {
        let data
        const action = (a) => {
            data = a
        }
        tabsToggle(action, null, undefined, null, {})
        expect(data).toEqual({})
    })

    test('action not crush without index', () => {
        let data
        const setActive = (a) => {
            data = a
        }
        tabsToggle(null, setActive, undefined, null, {})
        expect(data).toBe(null)
    })
})