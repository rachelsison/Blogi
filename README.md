# Blogi
## Setting up your environment:

1. Clone repo
2. Set your own enviornmental variables in a `.env` file in the main directory. You will need to set:
```
AIRTABLE_API_KEY= ************
BASE_ID= ****************
PORT= XXXX
```

You will also need to set two other variables called `TABLE_NAME` and `TABLE_VIEW` these can be found here within your Airtable view:

3. Install dependencies by running `yarn`
4. Run application with command `yarn start`
5. The application will be running locally on whatever port you chose. You can test the api endpoints using `Postman` or by typing the request into the search bar. Note: a view has not been created yet for the browser so it will just be a `JSON` response displayed on the page.

## API endpoints:
