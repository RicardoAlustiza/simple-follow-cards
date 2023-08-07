import { FollowCardComponent } from "./followCard.component";
import './App.css'

const mockUsers = [
  {
    userName: 'ricksplay_',
    name: 'Ricks',
    isFollowing: true
  },
  {
    userName: 'Rask',
    name: 'Rafael',
    isFollowing: false
  },
  {
    userName: 'Conch',
    name: 'Concha',
    isFollowing: true
  },
  {
    userName: 'RicardoAlustiza',
    name: 'Ricardo',
    isFollowing: false
  }
]

const App: React.FC = () => {

  return (
    <section className="App">
      {
        mockUsers.map(user => (
          <FollowCardComponent
            userName={user.userName}
            initialIsFollowing={user.isFollowing}
          >{user.name}
          </FollowCardComponent>
        ))
      }
    </section>
  )
}

export default App
