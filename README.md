# webpack-express-react-template

### Description
- Code Challenge: Create a form that sends a new assistance request to a mock api and handle server responses

### Install
```
git clone git@github.com:kkomaz/webpack-express-react-al.git
cd webpack-express-react-al
git checkout code-challenge
npm install

# executable
chmod +x fake_api
# run fake api
./fake_api

# running localhost:3001
npm start
```

### Test
```
# fake_api server should be running
npm run test
```


### Documentation
- Reference Link: http://usejsdoc.org/

```javascript
/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}
```

### Todo:
- Proper configuration on test_helper to better test actions and reducers
- Create Test Suite for actions and reducers
- Integrate MockStores for TestSuite
