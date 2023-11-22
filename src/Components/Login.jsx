import React from 'react'
import { Card, Container, Header } from 'semantic-ui-react'
import { contents } from './Content'
const Login = () => {
    const mapComponents = () => {
        return contents.map((content, index) => (
            <Card key={index} style={{ width: '100%', padding: '0 2rem 2rem 2rem' }}>
                <Header className='headerSection' style={{ marginTop: '1.3em' }} as='h2'>
                    {content.Title}

                </Header>

                {Object.keys(content).map((keyName) => (
                    keyName == 'API' ?
                        (<Card.Header as='h4' key={keyName}>
                            {keyName}: <span style={{ color: 'red', background: '#fbffb8', padding: '5px' }}>
                                {content[keyName]}
                            </span>
                        </Card.Header>
                        ) : (
                            <Card.Header as='h4' key={keyName}>
                                {keyName}:{content[keyName]}
                            </Card.Header>
                        )
                ))}
            </Card>
        ));
    }
    return (
        <>
            <Container>
                {/* {contents.map((content, index) => (
                    <Card key={index} style={{ width: '100%', padding: '0 2rem 2rem 2rem' }}>
                        <Header className='headerSection' style={{ marginTop: '1.3em' }} as='h2'>{content.Title}</Header>
                        {
                            Object.keys(content).map((keyName) => (
                                < Card.Header as='h5' key={keyName} >
                                    {keyName}:{content[keyName]}
                                </Card.Header>
                            ))
                        }
                    </Card>
                ))} */}
                {mapComponents()}
            </Container >
        </>
    )
}
export default Login