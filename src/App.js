import './App.css'
import {useState} from "react"
import FormInput from './Components/FormInput';
function App (){
  const [Values,setValues]= useState({
    username: "",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      errorMessage:"userName should be 3-16 characters and shouldn't include any special characters!",
      label:"Username",
      pattern:"^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"it should be a valid email address",
      label:"email",
      required: true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"birthday",
      required: true,
      label:"birthday"
    },
    {
      id:1,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"Password should be 8-20 characters and include at least 1letter and 1number and 1 special character",
      required: true,
      pattern:"^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z[0-9]@$!%*#?&]{8,20}$",
      label:"password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"confirmPassword",
      errorMessage:"password don't match",
      required: true,
      pattern:Values.password,
      label:"confirmPassword"
    },
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({...Values,[e.target.name]: e.target.value});
};
console.log(Values);
  return( 
    <div className="App">
        
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
       {inputs.map((input) => (
         <FormInput key={input.id} {...input} value={Values[input.name]}  onChange={onChange}/>

       ))}
        <button>Submit</button>
         
      </form>
    </div>
  
  );
}

export default App;
