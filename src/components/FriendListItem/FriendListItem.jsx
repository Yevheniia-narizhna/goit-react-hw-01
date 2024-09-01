import s from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <div className={s.item}>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <span
          className={clsx(s["status"], {
            [s.online]: isOnline,
            [s.offline]: !isOnline,
          })}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </>
  );
}
