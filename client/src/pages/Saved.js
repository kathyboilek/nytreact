import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {DeleteBtn} from "../components/Buttons";
import {Col, Row, Container} from "../components/Grid";
import {List, ListItem} from "../components/List";
// import {FormattedDate} from "../components/Dateformat";

class Search extends Component{
    
    state ={
        saved: []
    }

    componentDidMount(){
        this.getSaved();
    }

    getSaved = () => {
        API.returnSaved()
            .then(res => this.setState({ saved: res.data }))
            .catch(err => console.log(err));
    }

    deleteArticles = id => {
        API.deleteArticles(id)
            .then(res => this.returnSaved())
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <List>
                                {this.state.saved.map(article => (
                                    <ListItem key={article._id}>
                                        <a href={article.url}>{article.title}
                                        </a>
                                        <p>{article.date}</p>
                                        <DeleteBtn onClick={() => this.deleteArticles(article._id)}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search;