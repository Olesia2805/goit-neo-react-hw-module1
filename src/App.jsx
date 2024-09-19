import appCss from './App.module.css';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
