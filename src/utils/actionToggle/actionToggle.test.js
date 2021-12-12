import favoriteToggle from "./actionToggle"

test('paramRequest switches to the opposite', ()=>{
    let value = false
    const setValue = (param)=>{
        value=param
    }
    favoriteToggle(value, setValue)
    expect(value).toBe(true)
})