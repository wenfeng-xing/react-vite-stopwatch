import styled from "styled-components"

const WrapperTimeDisplay = styled.section`
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 5.5rem;
`

const TimeText = styled.p`
    margin-top: 100px;
`

export default function TimeDisplay() {
    return (
        <WrapperTimeDisplay>
            <p>00:00.00</p>
        </WrapperTimeDisplay>
    )
}