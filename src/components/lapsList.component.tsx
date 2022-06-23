import styled from "styled-components"

const WrapperLapsList = styled.ul`
    border-top: white 0.5px solid;
    width: 310px;
    flex: 1 1 35vh;
    list-style-type: none;
`

export default function LapsList() {
    return (
        <WrapperLapsList>
            <li>haha</li>
        </WrapperLapsList>
    )
}