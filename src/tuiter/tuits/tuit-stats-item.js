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
    return (
        <div>
            <i className="fa fa-reply" aria-hidden="true"></i>
            <a className="wd-edit-profile">{tuit.replies}</a>
            <i className="fa fa-retweet" aria-hidden="true"></i>
            <a className="wd-edit-profile">{tuit.retuits}</a>
            <i className="fa-solid fa-heart"></i>
            <a className="wd-edit-profile">{tuit.likes}</a>
            <i className="fa-solid fa-share-nodes"></i>
        </div>
    );
}
export default TuitStats;