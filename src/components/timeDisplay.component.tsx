import styled from "styled-components"

const WrapperTimeDisplay = styled.section`
    flex: 1 1 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5.5rem;
`

export default function TimeDisplay() {
    return (
        <WrapperTimeDisplay>
            <p>00:00.00</p>
        </WrapperTimeDisplay>
    )
}