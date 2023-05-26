import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppHeader from "../components/appHeader/AppHeader";
import Spinner from '../components/Spinner'

const Page404 = lazy(() => import('../components/pages/404'));
const MainPage = lazy(() => import('../components/pages/MainPage'));
const ComicsPage = lazy(() => import('../components/pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../components/pages/SingleComicPage'));

// 751
const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>
                            <Route exact path="/comics/:comicId">
                                <SingleComicPage/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;