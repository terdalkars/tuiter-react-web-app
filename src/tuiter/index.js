import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ExploreScreen from "./explore-screen/index";
import Profile from "./profile";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import authReducer from "./reducers/auth-reducer";
import LoginScreen from "./user/login-screen";
import ProfileScreen from "./user/profile-screen";
import RegisterScreen from "./user/register-screen";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, user:  authReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7">
                        <Routes className="list-group">
                            <Route path="/home" element={<HomeScreen/>} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/notifications" element={<h1>Notifications</h1>}/>
                            <Route path="/messages" element={<h1>Messages</h1>}/>
                            <Route path="/lists" element={<h1>Lists</h1>}/>
                            <Route path="/more" element={<h1>More</h1>}/>
                            <Route path="/login"    element={<LoginScreen    />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile"  element={<ProfileScreen  />} />
                        </Routes>
                    </div>
                    <div className="col-3">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;