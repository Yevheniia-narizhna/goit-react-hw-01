export default function Profile({name, tag, location, image, stats}) {
    return (
        <>
         <div>
    <img
      src={image}
      alt={name}
    />
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>{stats.followers(key)}</span>
      <span>{stats.followers[key]}</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
        </>
    )
}