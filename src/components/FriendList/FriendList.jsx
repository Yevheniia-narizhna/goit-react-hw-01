import s from './FriendList.module.css'
import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
    return (
        <>
        <div>
          <ul>
	  {friends.map((friend) => {
          return (
              <li  key={friend.id}>
                <FriendListItem
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline} />
              </li>
          );
	  })}
	</ul>      
        </div>
        </>
    )
}