import './App.css'

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <div className="todo-add">
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="todo-list">
          <div className="todo-item">
            <label>Test 1</label>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
