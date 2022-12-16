import react from "react";

import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=9f2a765bc23d4a4b89cea28cc28ecf5d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20userlibrary-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container>
<a className="btn btn-sucess btn-large" href={AUTH_URL}>Login With Spotify</a>
        </Container>
    )
}