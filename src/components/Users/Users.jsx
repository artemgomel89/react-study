import s from './Users.module.scss';
import axios from 'axios';
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((resp) => {
        props.setUsers(resp.data.items);
      });
  }

  return (
    <div>
      {props.users.map((e) => {
        return (
          <div className={s.card} key={e.id}>
            <div className={s.left}>
              <img alt="avatar" />
              <button
                className={s.followBtn}
                onClick={() => {
                  props.followToggle(e.id);
                }}
              >
                {e.isFollowed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
            <div className={s.cardText}>
              <div>
                <div>{e.name}</div>
                <div>{e.status}</div>
              </div>
              <div className={s.location}>
                <div>"e.location.country"</div>
                <div>"e.location.city"</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
