import React from "react";
import tuitsArray from '../tuit-summary-list/tuits.json';
import {useSelector} from "react-redux";
import TuitItem from "./tuits-list-item";

const TuitsList = () => {
    const { tuits } = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;

