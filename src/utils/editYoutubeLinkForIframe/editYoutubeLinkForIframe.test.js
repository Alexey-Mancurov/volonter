import editYoutubeLinkForIframe from "./editYoutubeLinkForIframe"


describe('foo', () => {
    test('function editYoutubeLinkForIframe correct worked', () => {
        let editLink
        const foo = (link)=>{
            editLink = link
        }
        editYoutubeLinkForIframe('https://www.youtube.com/watch?v=IEDe8jl5efU', foo)
        
        expect(editLink).toEqual('https://www.youtube-nocookie.com/embed/IEDe8jl5efU')

    })
})