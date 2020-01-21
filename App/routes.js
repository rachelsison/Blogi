const router = require('express').Router();
const AirtableCRUD = require('./airtable_connection');

const table = new AirtableCRUD();
// gets active posts
router.get('/posts', table.find(), (req, res) => res.jsonp(req.result));

// gets post with specific id
router.get('/posts/:id', table.findbyID(), (req, res) => res.jsonp(req.result))

module.exports = router;
