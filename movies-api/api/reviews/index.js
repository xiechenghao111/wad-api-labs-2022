import express from 'express';
import asyncHandler from 'express-async-handler';
import Review from './reviewModel'
const router = express.Router(); 
// Get movie reviews
router.get('/', async (req, res) => {
    const review = await Review.find();
    res.status(200).json(review);
});

router.post('/', asyncHandler(async (req, res) => {
    if (req.query.action === 'register') {  //if action is 'register' then save to DB
        await Review(req.body).save()
        res.status(201).json({
            code: 201,
            msg: 'Successful created new reviews.',
        });
    }
    else {  //Must be authenticating then! Query the DB and check if there's a match
        const review = await Review.findOne(req.body);
        if (!review) {
            return res.status(401).json({ code: 401, msg: 'Authentication failed' })
        } else {
            return res.status(200).json({ code: 200, msg: "Authentication Successful", token: 'TEMPORARY_TOKEN' })
        }
    }
}));
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Review.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Review Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update Review' });
    }
});
export default router;