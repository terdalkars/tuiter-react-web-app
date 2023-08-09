import React, {useEffect} from "react";
import tuitsArray from '../tuit-summary-list/tuits.json';
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuits-list-item";
import {findTuitsThunk} from "../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;

