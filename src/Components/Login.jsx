import React, { useState } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import { contents } from "./Content";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const Login = () => {
    const [clickedLanguage, setClickedLanguage] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);
    const handleClick = (language) => {
        setClickedLanguage(language);
        setCopySuccess(false);
    };

    const mapComponents = () => {
        return contents.map((content, index) => (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    border: "1px solid red",
                    marginBottom: "2rem",
                }}
            >
                <div style={{ width: "15%" }}>
                    {Object.keys(content).map((keyName) => (
                        <h5
                            className="apiKey"
                            style={{ height: "30px", margin: "10px 0px", padding: "0 20px" }}
                        >
                            {" "}
                            {keyName}
                        </h5>
                    ))}
                </div>
                <div style={{ width: "85%" }}>
                    {Object.keys(content).map((keyName) => {
                        if (keyName == "api") {
                            return (
                                <h5
                                    className="apiKey"
                                    style={{ color: "red", height: "30px", margin: "0" }}
                                >
                                    {content[keyName]}
                                </h5>
                            );
                        } else if (keyName == "languages") {
                            return (
                                <div>
                                    <Grid columns={5}>
                                        <Grid.Row style={{ marginTop: 4, padding: 0 }}>
                                            {content[keyName].map((language, index) => (
                                                <Grid.Column onClick={() => handleClick(language)}>

                                                    <h5 style={{ padding: 10 }} className="language_list">
                                                        {" "}
                                                        {language.language}
                                                    </h5>
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                    <Grid style={{ margin: 0 }} columns={1}>
                                        <Grid.Row style={{ margin: 0, padding: 10 }}>
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
                        } else {
                            return (
                                <h5
                                    className="apiKey"
                                    style={{ background: "", height: "30px", margin: "10px 0px" }}
                                >
                                    {content[keyName]}
                                </h5>
                            );
                        }
                    })}
                </div>
            </div>
        ));
    };

    return (
        <>
            <Container>{mapComponents()}</Container>
        </>
    );
};
export default Login;