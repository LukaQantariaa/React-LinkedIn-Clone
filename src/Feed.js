import "./Feed.css"
import InputOption from "./InputOption";
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"></input>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            { /* Posts */ }
            <Post name="Luka Qantaria" description="test" message="msg" />
        </div>
    )
}

export default Feed
