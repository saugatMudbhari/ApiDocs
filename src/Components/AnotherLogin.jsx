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

            <Container style={{ marginBottom: 25 }}>
                <Header as='h3'> {content.title} </Header>
                <div style={{
                    display: 'flex', alignItems: 'center',
                    margin: '15px 0',

                }} className="">
                    <Header as='h5'> <span style={{ background: '#3e77bb', padding: 5, color: 'white', borderRadius: 5 }}> {content.requestType}</span> </Header>
                    <Header style={{ paddingLeft: 20 }} as='h5'> <span style={{ padding: 5, color: 'red', borderRadius: 5, }}> {content.api}</span> </Header>

                </div>
                <Header style={{ paddingLeft: 20 }} as='h5'> <span style={{ padding: 5, color: 'red', borderRadius: 5, }}> {content.payload.toUpperCase()}</span> </Header>

                <div className="">
                    <p as=''> <span style={{ padding: 5, borderRadius: 5, }}> {content.description}</span> </p>

                </div>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>No Name Specified</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>

                        </Table.Row>
                    </Table.Body>

                </Table>
            </Container>
        ));
    };

    return (
        <>
            <Container>{mapComponents()}</Container>
        </>
    );
};
export default AnotherLogin;