
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
class ReactContainer extends React.Component{
    render(){
        return (
            <div>
              Hello! Welcome to Kalvium 
              <div>This is babel</div>  
            </div>
        );
}
}
const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);