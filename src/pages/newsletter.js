import React from 'react'

export default function TestPage() {
    return (
        <div>
            <form action="https://getform.io/f/ff0f9e01-261c-476b-b0af-b3a9f8cddc90" method="POST">
                <label htmlFor="name"></label>
                <input type="text" name="name" />
                <label htmlFor="email"></label>
                <input type="email" name="email" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
