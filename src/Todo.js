import React, {Component} from "react"

// class Todo extends Component{
function Todo({ user, name, done, description}) {

    // // 초기 데이터 선언
    // constructor(props){
    //     // super(props)
    //     // this.state = {
    //     state = {
    //         name: "cleaning",
    //         done: false,
    //         description: "cleaning my room"
    //     }
    //     // this.changeTodoName = this.changeTodoName.bind(this)
    // }
    // //이벤트 핸들러 함수
    // changeTodoName = () => {
    //     this.setState({ name: "learning react"})
    // }
    // render(){
        // const { name, done, description } = this.state
        return ( // HTML 템플릿
            <>
                <h2>user: {user}</h2>
                <h3>name: {name}</h3>
                <h4>done: {done? "finished":"not done!"}</h4>
                <p>description: {description}</p>
                <button type="button">할일 이름 바꾸기</button>
                    {/* onClick={this.changeTodoName}>할일 이름 바꾸기</button> */}
            </>
        )
    }
//}
export default Todo;

