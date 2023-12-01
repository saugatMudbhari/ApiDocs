import React, { useState } from "react";
import { Container, Grid, Header, Table } from "semantic-ui-react";
import { contents } from "./Content";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const AnotherLogin = () => {
    const [clickedLanguage, setClickedLanguage] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);
    const handleClick = (language) => {
        setClickedLanguage(language);
        setCopySuccess(false);
    };

    const mapComponents = () => {
        return contents.map((content, index) => (

            <Container style={{ marginBottom: 30, borderBottom: '1px solid #dedede', paddingBottom: 20 }}>
                <Header as='h3'> {content.title} </Header>
                <div style={{
                    display: 'flex', alignItems: 'center',
                    margin: '15px 0',

                }} className="">
                    <Header as='h5'> <span style={{ background: '#3e77bb', padding: 5, color: 'white', borderRadius: 5 }}> {content.requestType}</span> </Header>
                    <Header style={{ paddingLeft: 20 }} as='h5'> <span style={{ padding: 5, color: 'red', borderRadius: 5, }}> {content.api}</span> </Header>

                </div>
                {content.payload ? (<Header as='h5'> <span style={{ padding: 5, border: '2px solid red', borderRadius: 5, }}> {content.payload.toUpperCase()}</span> </Header>) : ('')}

                <div className="">
                    <p style={{ marginTop: 15 }} as=''> <span style={{ padding: 5, marginTop: 10 }}> {content.description}</span> </p>
                </div>
                <div className="">
                    {content.params ? (<Container as='h5'><Header as='h5'> <span style={{ padding: 5, color: '#3f7bd6', borderRadius: 5, }}>{content.params}</span></Header ></Container>) : ('')}

                </div>
                <div>
                    {Object.keys(content).map((keyName) => {
                        if (keyName == "languages") {
                            return (
                                <div style={{ marginTop: 25 }}>
                                    <Grid columns={5}>
                                        <Grid.Row style={{ marginTop: 4, padding: 0 }}>
                                            {content[keyName].map((language, index) => (
                                                <Grid.Column onClick={() => handleClick(language)}>

                                                    <h5 style={{ border: '2px solid #3e77bb7d', borderRadius: 5, padding: 10 }} className="language_list">
                                                        {" "}
                                                        {language.language}
                                                    </h5>
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                    <Grid style={{ margin: 0, paddingTop: 15 }} columns={1}>
                                        <Grid.Row style={{ margin: 0, }}>
                                            {content[keyName].map((language, index) => (
                                                <Grid.Column key={index}>
                                                    {clickedLanguage &&
                                                        clickedLanguage.language === language.language && (
                                                            <div style={{ position: 'relative' }} className="">
                                                                <CopyToClipboard
                                                                    text={language.code}
                                                                    onCopy={() => setCopySuccess(true)}
                                                                >
                                                                    <button class="button-62" role="button">
                                                                        {copySuccess ? "Copied" : "Copy"}
                                                                    </button>
                                                                </CopyToClipboard>
                                                                <SyntaxHighlighter language={language.language} style={nightOwl}>
                                                                    {language.code}
                                                                </SyntaxHighlighter>
                                                            </div>
                                                        )}
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            );
                        }
                    })}
                </div>
            </Container >
        ));
    };

    return (
        <>
            <Container>{mapComponents()}</Container>
        </>
    );
};
export default AnotherLogin;