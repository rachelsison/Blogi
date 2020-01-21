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
