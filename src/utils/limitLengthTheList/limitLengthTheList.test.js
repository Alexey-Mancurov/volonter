import limitLengthTheList from "./limitLengthTheList";

test('course list is correct max value', () => {
    let a = [
        1,
        2,
        3,
        4
    ]
    const comp = limitLengthTheList(a, 2);
    expect(comp.length).toBe(2)
})