import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import {Input, FormBtn} from "../components/Form";
import { Col, Row, Container } from "../components/Grid"
import API from "../utils/API";
import {List, ListItem} from "../components/List"
import {SaveBtn} from "../components/Buttons";

class Search extends Component {

    state = {
        title: '',
        startyear: '',
        endyear: '',
        results: []
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.title)
        .then(res => this.setState({results: res.data}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveArticles = article => {
        API.saveArticles({ title: article.headline.main, url: article.web_url })
        .then(console.log("saved article"), alert("Article Saved"))
        .catch(err => console.log(err));
    }



    render(){
        return (
        <Container>
            <Row>
                <Col size="md-12">
                <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Article Title (required)"
                />
                <Input
                    value={this.state.startyear}
                    onChange={this.handleInputChange}
                    name="startyear"
                    placeholder="Start Year [YYYYMMDD] (optional)"
                />
                <Input
                    value={this.state.endyear}
                    onChange={this.handleInputChange}
                    name="endyear"
                    placeholder="End Year [YYYYMMDD] (optional)"
                />
                <FormBtn
                    disabled={!(this.state.title)}
                    onClick={this.handleFormSubmit}
                >
                    Submit
                </FormBtn>
                </form>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                
                <List>
                    {this.state.results.map(article => (
                        <ListItem key={article._id}>
                        <a href={article.web_url}>{article.headline.main}</a>
                        <SaveBtn onClick={() => this.saveArticles(article)}/>
                        </ListItem>
                    ))}
                </List>
                
                </Col>
            </Row>
            
        </Container>
        )
    }
}

export default Search;