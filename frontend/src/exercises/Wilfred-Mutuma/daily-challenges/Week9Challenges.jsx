
import Timer from "./Timer";
import DebouncedSearch from "./DebouncedSearch";
import Tabs from "./Tabs";
import AuthChallenge from "./AuthChallenge";
import UserProfile from "./UserProfile";

function Week9Challenges() {
  return (
    <main>
      <h1>Week 9 React Advanced Challenges</h1>
      <p>
        Practical exercises covering timers, API searching,
        tabs, authentication and user profiles.
      </p>

      <Timer />
      <hr />

      <DebouncedSearch />
      <hr />

      <Tabs />
      <hr />

      <AuthChallenge />
      <hr />

      <UserProfile />
    </main>
  );
}

export default Week9Challenges;
