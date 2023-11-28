import React from 'react'
import { Card, Container, Grid, Segment, Header } from 'semantic-ui-react'
import { contents } from './Content'
const Login = () => {

    const mapComponents = () => {
        return contents.map((content, index) => (

            <div style={{ display: 'flex', width: '100%', border: '1px solid red', marginBottom: '2rem', }}>
                <div style={{ width: '15%', }}>
                    {Object.keys(content).map((keyName) => (
                        <h5 className='apiKey' style={{ height: '30px', margin: '10px 0px', padding: '0 20px' }}> {keyName}</h5>
                    ))}
                </div>
                <div style={{ width: '85%' }}>
                    {Object.keys(content).map((keyName) => {
                        if (keyName == 'API') {
                            return (<h5 className='apiKey' style={{ color: 'red', height: '30px', margin: '0' }}>
                                {content[keyName]}</h5>)
                        }
                        else if (keyName == 'languages') {
                            return (
                                <Grid columns={5} >
                                    <Grid.Row style={{ margin: 0, padding: 10 }} >
                                        {content[keyName].map((language, index) => (
                                            <Grid.Column  >
                                                {language.language}
                                            </Grid.Column>
                                        ))}
                                    </Grid.Row>
                                </Grid>
                            );
                        }
                        else {
                            return (<h5 className='apiKey' style={{ background: '', height: '30px', margin: '10px 0px' }}>
                                {content[keyName]}</h5>)
                        }
                    })}
                </div>
            </div >

        ));


    }

    return (
        <>
            <Container>
                {mapComponents()}
            </Container >
        </>
    )
}
export default Login