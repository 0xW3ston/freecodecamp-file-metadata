const router = require("express").Router();

router.get("/", upload.single("upfile") , (req, res) => {

    const fileName = req.file.originalname;
    const fileType = req.file.mimetype;
    const fileSize = req.file.size;

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
    `)
});

module.exports = router;