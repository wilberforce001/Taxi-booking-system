import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import BookingPage from './pages/BookingPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/book-taxi" component={BookingPage} />
    </Switch>
  </Router>
);

export default Routes;
