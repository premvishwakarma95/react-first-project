import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
    return (
        <div className='contact'>
            <Helmet>
                <title>contact</title>
                <meta name="description" content="My description" />
            </Helmet>
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" required placeholder="Abc" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder="Abc@gmail.com" />
                    </div>

                    <div>
                        <label>Message</label>
                        <input type="text" required placeholder="Tell us about your query..." />
                    </div>

                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}
