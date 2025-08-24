const express = requre('express')

const router = express.router()

router.get("/get-response", (req, res) => {
    const prompt= req.query.prompt

    if(!prompt){
        return res.status(400).send("Prompt is required")
    }
})


module.exports = router