class -4

Config driven UI.
Diff algorithm
Reconciliation
VDOM==representation of actual Dom
Y react is so fast?    Due to faster Dom manipulation. Bcoz of super powerful Diff also .
If there is a change in a node React will rerender  only that node.
React Fibre—
A big json send from backend.config is a js object or json.
Every component in react maintain STATE. You can put all the variable in the state.every time u have to create a local variable u have to use state.
useStatehook()
Hooks are just a function.it come with some functionalities.different hooks are there.one is useState hooks. useState hooks are use to create state variables.it comes from  react library.
How to use useState()
useState() function returns an array.The first element of the array is UR variable name.
const [searchText] = useState()
//searchText is a local state variable.
In js we create variables like const searchText = “kfc”.
But in react we create local variables like const [searchText] = useState(“kfc”) 
If u want to change ur variable name directly u cannot change directly.you need to change in setSearchInput.
                                    e.target.value
Why doo we need set variable when u have local variable?
Suppose u have a variable and u have changed the variable name. React might no be known the change of variable.react cannot keep track variable changes.react won’t re rerenter.thats y using useState variable.react will keep track of set variable.



File structure in React
2 types -> based on features & type of file

Created fodler structure => src -> components

src -> all code

components -> all components

export default Component - only one component can be exported in default - default import

export by name - then in import use named import

But, there can be many components in the same file

Named export : import {Title, Header} from './components/Header';

Default export : import Header, {Title} from './components/Header';

Defaukt :

name can be different export default Header ; import NewHeader from './components/Header';

file name can be .js or .jsx but i prefer .js

Best convention :

export default ComponentName import Component from '/Path'

Create config.js file -> put all hard coded and export

Search box -> cant change input nox

One way binding

If we need to change the value ,

Every componenet in react maintains a state . U can put all variables in the state. Everytime u use local variable u put state in it

Hook -> just like normal function -> called using useState() - to create state variable

HOOKS -> provides a direct API to teh React concepts

Why hooks ?

Hooks allow you to reuse stateful logic without changing your component hierarchy.

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

returns as array and first element is a variable, which is local state variable and value is passed through useState(value)

second arg is function to modify the state variable

get { useState() } from 'react';

const [searchText] = useState(value);

const [searchText, setSearchText] = useState(value);

const searchVariable = useState(value); const [searchText, setSearchText] = searchVariable;

setSearchText(e.target.value) value = { searchText }

Why do we need state ?

Two - way binding => updating state (reading and writing )

Syntactic events

when useState() is used React re-renders (reconciliation)

const [restaurants, setRestaurants] = useState(restaurantList);

onclick() const data = filterData(searchText, restaurants)

setRestaurants(data);

funciton filterData(searchText, restaurants) { restaurants.filter (res => { res.data.name }) }

In react we are using useState like this---> const [searchText, setSearchText] = useState("") isn't is against javascript rule as we are able to change the value of searchText which is of type const
When we change this state variable using setSearchText it forces the component to re-render. Every time the component re-renders, the const is a new version of const with updated value.