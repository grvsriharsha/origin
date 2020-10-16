import App from './App';
import {connect} from 'react-redux'
function mapStateToProps(state) {
    return {age: state}
}

const NewApp = connect(mapStateToProps)(App);

export default NewApp;
