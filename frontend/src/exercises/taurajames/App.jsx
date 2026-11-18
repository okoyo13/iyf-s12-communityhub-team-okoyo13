import Greeting from './Greeting'
import Card from './Card'
import List from './List'
import Button from './Button'
import Layout from './Layout'

function App() {
  const topics = ['React', 'JavaScript', 'HTML', 'CSS']

  function handleClick() {
    alert('Hello from CommunityHub!')
  }

  return (
    <Layout>
      <Greeting />

      <Card
        title="Learning React"
        description="React helps us build reusable user interfaces."
      />

      <List items={topics} />

      <Button
        text="Say Hello"
        onClick={handleClick}
      />
    </Layout>
  )
}

export default App