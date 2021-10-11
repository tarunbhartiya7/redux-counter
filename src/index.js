import ReactDOM from 'react-dom'
import App, {store} from './App'


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)