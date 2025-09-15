import Link from "next/link";
import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const StyledLink = styled(Link)`
    padding: 0.5rem 1rem;
    background-color: #208000;
    color: #ffffff;
    border-radius: 0.5rem;
`