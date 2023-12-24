const router = require("express").Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

router.post("/fileanalyse", upload.single("upfile") , (req, res) => {

    const fileName = req.file.originalname;
    const fileType = req.file.mimetype;
    const fileSize = req.file.size;

    res.json({
        name: fileName,
        type: fileType,
        size: fileSize
    });
});

module.exports = router;