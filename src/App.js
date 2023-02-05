//import header component
import Header from "./components/Header";

//to retrieve a prop inside af a componenet, then
//take in parops as a parameter
function App() {
  //use an expression, makes it above the return
  //you can write JS directly in here
  const name = 'Mai'
  //Operator: if x, then show yes, else show no
  //if true yes, if false no
  const x = true
  return (
    //web returning this jsx, you can only return a single parent element
    //<div className="container">
     // <h2>Hi { name }</h2>
     // <h3>Hi { x ? 'Yes sir' : 'No'}</h3>
     // <Header title='My first component' />
   // </div>
    //if i will create another html element, like h2, then it wont compile, because 
    //there can only be one parent element , move the element into the exsisting div

    <div className="container">
      <Header />

    </div>
   
  );
}

export default App;
