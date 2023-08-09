import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import {FaHeart} from "react-icons/fa";

const TuitStats = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
            "image": "https://previews.123rf.com/images/olegdudko/olegdudko1512/olegdudko151203057/48967698-human-face.jpg"
        }
    }
) => {

    const dispatch = useDispatch();
    return (
        <div>
            <FaHeart
                className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                }
            />
            <span className="ms-2">{tuit.likes}</span>
        </div>
    );
}
export default TuitStats;


