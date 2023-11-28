import React from 'react'
import { Card, Container, Grid, Segment, Header } from 'semantic-ui-react'
import { contents } from './Content'
const Login = () => {

    const mapComponents = () => {
        return contents.map((content, index) => (

            <div style={{ display: 'flex', width: '100%', border: '1px solid red', marginBottom: '2rem', }}>
                <div style={{ width: '20%', }}>
                    {Object.keys(content).map((keyName) => (
                        <h5 className='apiKey' style={{ padding: '15px  10px', margin: '0' }}> {keyName}</h5>
                    ))}
                </div>
                <div style={{ width: '80%' }}>
                    {Object.keys(content).map((keyName) => {
                        if (keyName == 'API') {
                            return (<h5 className='apiKey' style={{ color: 'red', background: '#fbffb8', padding: '15px  10px', margin: '0' }}>
                                {content[keyName]}</h5>)
                        }
                        else if (content[keyName].length <= 0) {
                            return (<h5 className='apiKey' style={{ padding: '24px  10px', margin: '0' }}>
                            </h5>)
                        }
                        // rough
                        else if (keyName == 'languages') {
                            return (
                                <Grid columns={5} >
                                    <Grid.Row style={{ margin: 0 }} >
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
                            return (<h5 className='apiKey' style={{ background: '', padding: '15px  10px', margin: '0' }}>
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