import React from 'react';
import {AccordionScroller, AccordionItem} from '@servesall/molecules';
import {
    H1,
    H2,
    MarginHorizontal,
    Padding,
    CenterLeft,
    TextBtn,
} from '@servesall/atoms';
import {
    useHistory,
    Link
} from "react-router-dom";

function Nav() {
    let history = useHistory();
    return (
            <>
                <AccordionItem
                    eventKey="0"
                    onChange={(isOpen) => console.log('here2', isOpen)}>
                    <AccordionItem.Head>
                        <Padding>
                            <MarginHorizontal>
                                <CenterLeft direction="row">
                                    <MarginHorizontal>
                                        <H1>Atoms</H1>
                                    </MarginHorizontal>
                                </CenterLeft>
                            </MarginHorizontal>
                        </Padding>
                    </AccordionItem.Head>
                    <AccordionItem.Body>
                        <TextBtn onClick={() => history.push('/theme')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Theme</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/text')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Text</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/layout')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Layout</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/button')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Button</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/input')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Input</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/loader')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Loader</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/icons')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Icons</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/flatlist')} borderColorActive="red" borderColorIdle="grey">
                            <H2>FlatList</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/header')} borderColorActive="red" borderColorIdle="grey">
                            <H2>Header</H2>
                        </TextBtn>
                        <TextBtn onClick={() => history.push('/bottomnavbar')} borderColorActive="red" borderColorIdle="grey">
                            <H2>BottomNavBar</H2>
                        </TextBtn>
                    </AccordionItem.Body>
                </AccordionItem>
                <AccordionItem
                    eventKey="1"
                    onChange={(isOpen) => console.log('here1', isOpen)}>
                    <AccordionItem.Head>
                        <Padding>
                            <MarginHorizontal>
                                <CenterLeft direction="row">
                                    <MarginHorizontal>
                                        <H1>Molecules</H1>
                                    </MarginHorizontal>
                                </CenterLeft>
                            </MarginHorizontal>
                        </Padding>
                    </AccordionItem.Head>
                    <AccordionItem.Body>
                        <Link to="/">Home</Link>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                    </AccordionItem.Body>
                </AccordionItem>
                <AccordionItem
                    eventKey="2"
                    onChange={(isOpen) => console.log('here1', isOpen)}>
                    <AccordionItem.Head>
                        <Padding>
                            <MarginHorizontal>
                                <CenterLeft direction="row">
                                    <MarginHorizontal>
                                        <H1>Organisms</H1>
                                    </MarginHorizontal>
                                </CenterLeft>
                            </MarginHorizontal>
                        </Padding>
                    </AccordionItem.Head>
                    <AccordionItem.Body>
                        <Link to="/">Home</Link>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                        <TextBtn borderColorActive="red" borderColorIdle="grey">
                            <H2>test</H2>
                        </TextBtn>
                    </AccordionItem.Body>
                </AccordionItem>
            </>
    );
}

export default Nav;
