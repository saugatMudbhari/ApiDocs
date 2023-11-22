import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import { contents } from './Content'
const Login = () => {
    return (
        <>
            <Container>
                {contents.map((content, index) => (
                    <Card style={{ width: '100%', padding: '0 2rem 2rem 2rem' }}>
                        <Header key={index} className='headerSection' style={{ marginTop: '1.3em' }} as='h2'>{content.Title}</Header>
                    </Card>

                ))}
            </Container>
        </>
    )
}

export default Login