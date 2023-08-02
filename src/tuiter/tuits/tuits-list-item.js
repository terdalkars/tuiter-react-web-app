import React from "react";
import {useSelector} from "react-redux";
import TuitStats from "./tuit-stats-item";
import { FaReply, FaRetweet, FaShare } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {AiOutlineClose} from "react-icons/ai";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
            "image": "https://previews.123rf.com/images/olegdudko/olegdudko1512/olegdudko151203057/48967698-human-face.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    //const { tuits } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={48} height={48} className="rounded-circle" src={`${tuit.image}`}/>
                </div>
                <div className="col-9">
                    <div className="fw-bolder float-start">{tuit.topic}</div>
                    <div className="float-none fg-color-gray">@{tuit.userName} . {tuit.time}</div>
                    <div>{tuit.title}</div>
                    <div>
                        {tuit.tuit}
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <FaReply/><a>{tuit.replies}123</a>
                        </div>
                        <div className="col-2">
                            <FaRetweet/><a>{tuit.retuits}456</a>
                        </div>
                        <div className="col-2">
                            <FcLike/><a>{tuit.likes}789</a>
                        </div>
                        <div className="col-2">
                            <FaShare/>
                        </div>
                    </div>

                    {/*<div>*/}
                    {/*    {*/}
                    {/*        tuits.map(tuit =>*/}
                    {/*            <TuitStats*/}
                    {/*                key={tuit._id} tuit={tuit}/> )*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
                <div className="col-10 float-end">
                    <AiOutlineClose onClick={() => deleteTuitHandler(tuit._id)}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;