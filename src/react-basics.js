import React, {Component} from 'react';
import PropTypes from "prop-types";

class Panel extends Component {

  onButtonClicked = (isToggled)=> {
    console.log('make api call to server!', isToggled)
  };

  state = {
    user: { name: 'David'}
  };

  render() {

    const buttonText = `Hi ${this.state.user.name}`;

    return (
      <div>
        <h1>Panel</h1>
        <MyButton text={buttonText} color={'red'} onClick={this.onButtonClicked}  />
      </div>
    )
  }
}

const DummyTitle = (props)=> {
  return (
    <h1>{props.text}</h1>
  );
};



class MyButton extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired, // optional - validates that the text is a string and required
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    color: 'white'
  };

  state = {
    isToggled: false,
  };

  onButtonClicked = ()=> {

    const currentIsToggled = !this.state.isToggled;

    this.setState({isToggled: currentIsToggled});

    this.props.onClick(currentIsToggled);
  };


  render() {
    const { text, color } = this.props;

    const buttonColor = this.state.isToggled ? 'blue' : color;

    const style = {
      color: buttonColor
    };

    return (
      <button onClick={this.onButtonClicked} style={style}>{text}</button>
    )
  }
}


















const FilterType = {
  All: 'all',
  Completed: 'completed',
  Active: 'active',
};


const todos = {
  items: [],
  showingItems: [],
  filterType: FilterType.All,

  filterChanged(filterType) {

    this.filterType = filterType;

    switch (filterType) {
      case FilterType.Active:
        this.showingItems = this.items.filter( (todo)=> !todo.isCompleted);
        break;

      case FilterType.Completed:
        this.showingItems = this.items.filter( (todo)=> todo.isCompleted);
        break;

      case FilterType.All:
      default:
        this.showingItems = this.items;
    }
  },


  search(searchQuery) {

    if (!searchQuery) {
      this.showingItems = this.items;
      return;
    }

    this.showingItems = this.items.filter( (todo)=> {
      return todo.task.includes(searchQuery);
    });
  },

  toggle (id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },
  add (obj) {
    this.items.push(obj);
    this.save();
  },
  remove (id) {
    this.items.splice(id, 1);
    this.save();
  },
  update (id, task) {
    let todoItem = this.items[id];
    todoItem.task = task;
    this.save();
  }
};



export default class App extends React.Component {
  constructor(props) {
    super(props);
    //setInterval(() => {
    //    todos.push({
    //        task: "Make tea: " + Math.random(),
    //        isCompleted: true
    //    });
    //    this.setState({ todos });
    //}, 1000);


    this.state = {
      todos: todos.items
    };
  }

  render() {
    return (
      <div>
        <h1>TODOs</h1>
        <CreateTodo
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

}











class Counter extends Component {

  state = {
    count: 0
  };

  onClicked = ()=> {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <div>
        <button onClick={this.onClicked}>CLICK ME</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }

}














