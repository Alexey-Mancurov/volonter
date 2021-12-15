import DarkStar from "../../components/common/DarkStart/DarkStart"
import GoldStar from "../../components/common/GoldStart/GoldStart"
import renderingStartsRating from "./renderingStartsRating"

test('function correct renders if rating less than 5',()=>{
    const rating = 3
    const correctVisible = [
        <GoldStar />,
        <GoldStar />,
        <GoldStar />,
        <DarkStar />,
        <DarkStar />,
    ]
    const starList = renderingStartsRating(rating)
    expect(starList).toEqual(correctVisible)
})

test('function correct renders if rating 5',()=>{
    const rating = 5
    const correctVisible = [
        <GoldStar />,
        <GoldStar />,
        <GoldStar />,
        <GoldStar />,
        <GoldStar />,
    ]
    const starList = renderingStartsRating(rating)
    expect(starList).toEqual(correctVisible)
})