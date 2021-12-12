import actionWithDataAndScrollToTop from "./actionWithDataAndScrollToTop"


test('page scroll to start when clicked', () => {
    let state = 0
    const setState = (a)=>{
        state = a 
    }
    actionWithDataAndScrollToTop(1, setState)
    
    expect(state).toBe(1)
})