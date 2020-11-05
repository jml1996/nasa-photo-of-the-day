import React, { useState, useEffect } from 'react'

export default function Explanation(props) {
    const { explanation } = props;

    return (
        <div>
            {explanation}
        </div>
    )
}