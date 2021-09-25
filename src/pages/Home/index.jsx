
import React from 'react'
import Post from './components/Post'
import TweetBox from './components/TweetBox'
import { Container, Header } from './styles'

export default function Home() {
    return (
        <Container>
            <Header className="home-text">Home</Header>
            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
    )
}
