import React, { useState, useEffect } from 'react'

export default function Title(props) {
    const { title } = props;

    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}