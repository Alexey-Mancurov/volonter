import editYoutubeLinkForIframe from "./editYoutubeLinkForIframe"


describe('foo', () => {
    test('function editYoutubeLinkForIframe correct worked', () => {
        expect(editYoutubeLinkForIframe('https://www.youtube.com/watch?v=IEDe8jl5efU', console.log)).toEqual('https://www.youtube-nocookie.com/embed/IEDe8jl5efU')

    })
    const sum = (a, b) => {
        return a + b
    }
    test('summ', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})