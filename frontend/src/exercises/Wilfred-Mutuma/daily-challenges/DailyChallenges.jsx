
import { useState } from "react";
import Greeting from "./Greeting";
import Card from "./Card";
import UserList from "./UserList";
import Button from "../components/Button";
import PageLayout from "../components/PageLayout";

function DailyChallenges() {
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  function handleLoadingDemo() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  const users = [
    { id: 1, name: "James Mwangi", email: "james@example.com" },
    { id: 2, name: "Taura James", email: "taura@example.com" },
    { id: 3, name: "Wilfred Mutuma", email: "wilfred@example.com" },
  ];

  return (
    <PageLayout sidebar={<p>Week 8 Daily Challenges</p>}>
      <h1>My React Daily Challenges</h1>

      <Card title="Day 1: Greeting" variant="primary">
        <Greeting name="Wilfred" timeOfDay="morning" />
        <Greeting name="Guest" timeOfDay="afternoon" />
        <Greeting name="Guest" timeOfDay="evening" />
      </Card>

      <Card title="Day 2: Card Variants" variant="secondary">
        <p>Primary, secondary and outlined cards.</p>
      </Card>

      <Card title="Day 3: User List" variant="outlined">
        <UserList users={users} />
        <h4>Empty list test</h4>
        <UserList users={[]} />
      </Card>

      <Card title="Day 4: Reusable Button">
        <p>Button clicked {clickCount} times.</p>
        <Button
          text="Click me"
          onClick={() => setClickCount(clickCount + 1)}
          variant="primary"
          size="medium"
        />
        <Button text="Disabled" disabled variant="danger" size="small" />
        <Button
          text="Loading demo"
          loading={loading}
          onClick={handleLoadingDemo}
          variant="secondary"
        />
      </Card>

      <Card title="Day 5: Page Layout">
        <p>
          This page uses PageLayout with Header, Footer and an optional Sidebar.
        </p>
      </Card>
    </PageLayout>
  );
}

export default DailyChallenges;
