const router = require("express").Router();

router.get("/", (req, res) => {

    res.send(`
        <head>
        </head>
        <body>
            <form action="/fileanalyse" method="post" enctype="multipart/form-data">
                <label for="file">Select a file:</label>
                <input type="file" id="file" name="upfile">
            
                <button type="submit">Upload</button>
            </form>
        </body>
    `).end();
});

module.exports = router;