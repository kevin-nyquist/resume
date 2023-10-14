import { useEffect } from 'react'

function SpotifyApp() {
    useEffect(() => {
        const script = document.createElement("script")
    
        script.src =
            "src/script.ts"

        script.async = true
        
        script.type="module"
    
        document.body.appendChild(script)
    
        return () => {
            // clean up the script when the component in unmounted
            document.body.removeChild(script)
        }
        }, [])
    return (
        <div className="App">
            <h1>Display your Spotify profile data</h1>
            <section id="profile">
            <h2>Logged in as <span id="displayName"></span></h2>
            <span id="avatar"></span>
            <ul>
                <li>User ID: <span id="id"></span></li>
                <li>Email: <span id="email"></span></li>
                <li>Spotify URI: <a id="uri" href="#"></a></li>
                <li>Link: <a id="url" href="#"></a></li>
                <li>Profile Image: <span id="imgUrl"></span></li>
            </ul>
            </section>
        </div>
    )
}

export default SpotifyApp