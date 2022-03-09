import s from './Users.module.scss';
import logo from '../../assets/avatar-svgrepo-com.svg';
import React from 'react';
import Spinner from '../Spinner/Spinner';
const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pagesList = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesList.push(i);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pagination}>
        {pagesList.map((el) => (
          <span
            className={el === props.currentPage ? s.active : null}
            onClick={() => {
              props.onPageChanged(el);
            }}
          >
            {el}
          </span>
        ))}
      </div>
      {props.isLoading ? (
        <Spinner />
      ) : (
        props.users.map((e) => {
          return (
            <div className={s.card} key={e.id}>
              <div className={s.left}>
                <img alt="avatar" src={logo} />
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
        })
      )}
    </div>
  );
};

export default Users;
