import styled from "styled-components"

const WrapperLapsList = styled.div`
    & {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 350px;
        flex: 1 1 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const LapElement = styled.div`
    font-size: 1rem;
    flex: 0 0 30px;
    width: 350px;
    border-bottom: white 0.3px solid;
    border-top: white 0.3px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default function LapsList() {
    return (
        <WrapperLapsList>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
            <LapElement>haha</LapElement>
        </WrapperLapsList>
    )
}