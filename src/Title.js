import React, { useState, useEffect } from 'react'
import styled from "styled-components";

export default function Title(props) {
    const { title } = props;

    return (
        <StyledTitle>
            <h1>
                {title}
            </h1>
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
    text-align: center;
`