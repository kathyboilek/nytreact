const router = require("express").Router();
// const articleController = require("../../controllers/articleController");
const axios = require("axios");

const apiKey = '7606240c9d5f45889a66ebea460891ee'

const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
apiKey + '&q='; 

router.get("/all", (req, res) => {
    axios.get(queryURL + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)))
});

// router.route("/")
//     .get(articleController.findAll)
//     .post(articleController.create);

// router.route("/:id")
//     .get(articleController.findById)
//     // .put(articleController.update)
//     .delete(articleController.remove)

module.exports = router;