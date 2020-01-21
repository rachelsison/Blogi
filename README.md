# Blogi
## Setting up your environment:

1. Clone repo
2. Set your own enviornmental variables in a `.env` file in the main directory. You will need to set:
```
AIRTABLE_API_KEY= 
BASE_ID= 
PORT=
TABLE_NAME=
TABLE_VIEW=
```

#####   Finding .env variables in your Airtable View:
  - `AIRTABLE_API_KEY` : visit your [account page](https://airtable.com/account) and generate an api key
  - `BASE_ID` : this can be found within the url on your Airtable view. It is the first parameter after `airtable.com`. Example: `airtable.com/examplebaseid/12245trsdfgfy6453`
  - `TABLE_NAME` and `TABLE_VIEW`: in the left hand corner of your table there is the table name (hover and it will give you the option to change the table name) and directly underneath it is the table view. The defalt for table view is Grid, but you can set it to whatever you like.


3. Install dependencies by running `yarn`
4. Run application with command `yarn start`
5. The application will be running locally on whatever port you chose. You can test the api endpoints using `Postman` or by typing the request into the search bar. Note: a view has not been created yet for the browser so it will just be a `JSON` response displayed on the page.

## API endpoints:

The following endpoints assume a table structure with columns labeled: `UUID, title, body, active`
- Active is a boolean/ checkbox
- Each post also has an associated ID created when the record was created. This ID is what is used for lookup for the endpoint that returns posts by ID
- UUID is for the users ID and is not yet implemented in the endpoints.
- The following examples the port is assumed `3000` but this will be whatever port you choose to set in the `.env` file.

##### To return posts that are active:
issue a `GET` request to `http://localhost:3000/posts/` 

##### To return a post by ID:
issue a `GET` request to `http://localhost:3000/posts/:id`
You can find an ID for a given post by choosing an ID associated with a given post when you make a call to `GET` `http://localhost:3000/posts/` endpoint.

## Future endpoints:

- Create new posts
- Update Posts
- Delete Posts
- Flexible Route (more on flexible route below)

##### Flexible Route

A flexible route that allows developer to sort, filter by field, set max number of records to return, set page size filter by formulas etc. The benefit of putting this into the hands of the developer that would be consuming this data is that we wouldn't have to create a separate endpoint for every single use case right off the bat. Of course routes that are continuously being used would get their own endpoint for ease of use but having this flexibility for one-off cases is valuable.

Quite a bit more work would need to go into this before making it live. Namely sanitizing the request data, making sure the requests have valid formatting (although currently if its malformed Airtable will actually just throw an error and continue running as usual), and of course testing.

Here is how a flexible route would work:

- use URL encoded query parameters that fit the structure and camel casing defined in `https://airtable.com/BASE_ID/api/docs#curl/table:posts:list`. (replace `BASE_ID` with your own base id).

- add these query parameters after `http://localhost:3000/query/?` Example: `http://localhost:3000/query/?fields=uuid+titie+body`

- Special cases to adapt data structures to URL: for filtering by fields separate field values with a `+` sign. This will be handled in the api to be made into the proper structure.
