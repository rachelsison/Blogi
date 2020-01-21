const base = require("airtable").base(process.env.BASE_ID);
const table = base(process.env.TABLE_NAME);
const tableView = process.env.TABLE_VIEW;

class AirtableCRUD {
	constructor(resultKey = 'result', queryKey = 'id') {
		this.resultKey = resultKey;
		this.queryKey = queryKey;
	}

	find(options) {
		// set filter to return only the UUID, title and body of active posts unless other options passed in
		let filter = options ? options : {
	    fields: ['UUID', 'title', 'body'],
	    filterByFormula: "NOT(NOT(active))",
	    view: tableView
		}
		return (req, res, next) => {
			table.select(filter).eachPage(function page(records, fetchNextPage) {
		    // This function (`page`) will get called for each page of records.

		    records.forEach(function(record) {
		        console.log('Retrieved', record.get('UUID'));
		    });

		    // To fetch the next page of records, call `fetchNextPage`.
		    // If there are more records, `page` will get called again.
		    // If there are no more records, `done` will get called.
		    fetchNextPage();
		    req[this.resultKey] = records;
		    next();
			}.bind(this), function done(err) {
			    if (err) { console.error(err); return; }
			});
		}
	}

	findbyID() {
		return (req, res, next) => {
	      table.find(req.params[this.queryKey], (err, record) => {
	        if (err) { console.error(err); return; }
	        console.log('Retrieved', record.get('UUID'));
	        req[this.resultKey] = record;
	        next();
	      });
    }
	}

	queryTable() {
		return (req, res, next) => {
			// returns all of the queries in the request in a key, value pair in a object
			let filter = req.query;

			// filering for fields takes multiple arguments
			// to represent this in the request each field can be joined by '+' sign
			// here it is being split into an array of fields which is the correct request structure
			if (filter['fields']) {
				filter['fields'] = filter['fields'].split(' ');
			}

			// TODO: sanitize requests and possibly limit what requests can be made, and many more special cases
			// like the above fields adjustment.

			table.select(filter).eachPage(function page(records, fetchNextPage) {
		    // This function (`page`) will get called for each page of records.

		    records.forEach(function(record) {
		        console.log('Retrieved', record.get('UUID'));
		    });

		    // To fetch the next page of records, call `fetchNextPage`.
		    // If there are more records, `page` will get called again.
		    // If there are no more records, `done` will get called.
		    fetchNextPage();
		    req[this.resultKey] = records;
		    next();
			}.bind(this), function done(err) {
			    if (err) { console.error(err); return; }
			});
		}
	}
}

module.exports = AirtableCRUD;
