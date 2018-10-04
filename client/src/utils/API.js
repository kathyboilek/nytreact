import axios from "axios";

export default {
    // getArticles will use MongoDB to find saved articles
    getArticles: function(query){
        return axios.get("/api/article/all/", { params: { q: query } });
    },
    returnSaved: function(){
        return axios.get("/api/saved");
    },
    // saveArticles will save article to MongoDB
    saveArticles: function(article){
        return axios.post("/api/saved", article)
    },
    // deleteArticles will delete article from MongoDB
    deleteArticles: function(id){
        return axios.delete("/api/saved/" + id);
    },
    initialPage: function(){
        return axios.get("*");
    }

    
}