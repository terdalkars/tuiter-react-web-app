import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ExploreScreen from "./explore-screen/index";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";


function Tuiter() {
    return (
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
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/notifications" element={<h1>Notifications</h1>}/>
                        <Route path="/messages" element={<h1>Messages</h1>}/>
                        <Route path="/lists" element={<h1>Lists</h1>}/>
                        <Route path="/more" element={<h1>More</h1>}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <WhoToFollowList />
                </div>
            </div>
        </div>
    );
}
export default Tuiter;