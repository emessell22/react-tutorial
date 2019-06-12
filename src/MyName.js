import React, {Component} from 'react';

// class MyName extends Component{
//   static defaultProps ={
//     name: '기본 이름'
//   }
//
//   render(){
//     return (
//       <div>
//         안녕 난 {this.props.name}이야.
//       </div>
//     )
//   }
// }
const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name}입니다.
    </div>
  )
}

MyName.defaultProps = {
  name: "나야나"
}

export default MyName;
