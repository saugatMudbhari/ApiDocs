import React, { useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { contents } from './Content'

const Login = () => {
    const [isClick, setIsClick] = useState(false);
    const handleClick = (event) => {
        setIsClick(current => !current);
    };
    { console.log(isClick) }
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
                                <div>
                                    <Grid columns={5} >
                                        <Grid.Row style={{ marginTop: 4, padding: 0 }} >
                                            {content[keyName].map((language, index) => (
                                                <Grid.Column onClick={handleClick}>
                                                    <h5 style={{ padding: 10 }} className='language_list'> {language.language}</h5>
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                    <Grid columns={1} >
                                        <Grid.Row style={{ margin: 0, padding: 10 }} >
                                            {content[keyName].map((language, index) => (
                                                <Grid.Column   >
                                                    {isClick && (<code style={{}}>
                                                        {language.code}
                                                    </code>)}
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                </div>
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