import FriendListItem from '../FriendListItem/FriendListItem';
// import listCss from './FriendList.moule.css';

const FriendList = () => {
  return (
    <ul>
      {/* The number of li depends on the number of objects in the array */}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendList;
