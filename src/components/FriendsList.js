import React, { Component } from "react";

export default class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        {
          name: "Lizzy",
          age: 22,
          img:
            "https://static01.nyt.com/images/2019/09/10/us/politics/10-warren-candidatepage/10-warren-candidatepage-threeByTwoSmallAt2X.jpg"
        },
        {
          name: "William",
          age: 25,
          img:
            "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzczOTE3NzA4/bill-clinton-9251236-1-402.jpg"
        },
        {
          name: "Barry",
          age: 32,
          img:
            "https://i.insider.com/59c387d3ba785e34910e27b4?width=1100&format=jpeg&auto=webp"
        },
        {
          name: "Candy",
          age: 28,
          img:
            "https://upload.wikimedia.org/wikipedia/commons/4/42/Condoleezza_Rice_cropped.jpg"
        }
      ],
      showFriends: false
    };
    this.toggleChange = this.toggleChange.bind(this)
  }
  toggleChange () {
      this.setState({
          showFriends: !this.state.showFriends
      })
  }
  render() {
    const friends = this.state.friends.map((el, i) => (
      <div key={i}>
        <img width={'200px'} src={el.img} alt="" />
        <h1>Name: {el.name}</h1>
        <h2>Age: {el.age}</h2>
      </div>
    ));
    return (
      <div>
          <h1>I made some changes</h1>
        <h1>My Close Friends: </h1>
        {!this.state.showFriends ? <button onClick={this.toggleChange}>Show Me My Friends Please!</button> : <div>
            <button onClick={this.toggleChange}>Hide My Friends</button>
            {friends}
            </div>}
      </div>
    );
  }
}
