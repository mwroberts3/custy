import './App.css';
import CSCardGrid from './CSCardGrid'
import AddTodo from './AddTodo'

function App() {
  return (
    <div className="App">
      <h1>Custy</h1>
      <div style={{
        width:'100%', display: 'flex', justifyContent: 'center'
        }}>
        <AddTodo />
      </div>
      <CSCardGrid />
    </div>
  );
}

export default App;
