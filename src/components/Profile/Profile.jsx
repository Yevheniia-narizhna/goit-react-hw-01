import s from './Profile.module.css'
export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={s.profile}>
         <div className={s.descr}>
    <img className={s.image}
      src={image}
      alt={name}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.listats}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={s.listats}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={s.listats}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
        </div>
    )
}