
function Login2(){

 return(
   <div>
   <input/>
   <Button onClick = { (e) => {
     console.log(e)
     alert(e.target.value)
   } } > 로그인! </Button>
   </div>

 )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "흠냐"}
  }

  render(){
    return(
      <div>
      <input onChange = { (e) => this.setState({id : e.target.value })  }/>
      <Button onClick = { (event) => {
        alert(this.state.id)
      } } > Login </Button>
      </div>
    )
  }
}
