const router = require("express").Router();
const multer = require("multer");

// const storage = multer.memoryStorage();
const upload = multer({ dest: './files' });

router.post("/fileanalyse", upload.single("file") , (req, res) => {

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