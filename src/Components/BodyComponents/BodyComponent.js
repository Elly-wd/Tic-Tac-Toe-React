import React, { Component } from 'react'
import autobind from 'class-autobind'


// This class has the cells of game
class BodyComponent extends Component{

    state={
        values: {
            v1: {type:"",checked:false},
            v2: {type:"",checked:false},
            v3: {type:"",checked:false},
            v4: {type:"",checked:false},
            v5: {type:"",checked:false},
            v6: {type:"",checked:false},
            v7: {type:"",checked:false},
            v8: {type:"",checked:false},
            v9: {type:"",checked:false},

        },
typeGlobal: false,
player:"",
    }

    constructor(props){
        super(props)
        autobind(this)
    }

    handleCheck = value => {
        if(this.state.winner === ''){
          let mark
          let player
          if(this.state.typeGlobal){
            mark = 'O'
            player = '1'
          }else{
            mark = 'X'
            player = '2'
          }

    if(this.state.values[value].checked === false){
        this.setState({
            typeGlobal : !this.state.typeGlobal,player,
            values: {...this.state.values,[value]:{type:mark}}
        })

    }
    setTimeout(() => {
        this.checkWin()
        
      },200)      
        }

    }

    restartGame = () => {
        this.setState({
          typeGlobal : false,
          winner:'',
          player: '',
          velha:'',
          values: {
            v1: {type:'', checked:false},
            v2: {type:'', checked:false},
            v3: {type:'', checked:false},
            v4: {type:'', checked:false},
            v5: {type:'', checked:false},
            v6: {type:'', checked:false},
            v7: {type:'', checked:false},
            v8: {type:'', checked:false},
            v9: {type:'', checked:false},
          },
        })
      
      }
    
      checkWin = () => {
        let opWins = [
          [this.state.values.v1.type,this.state.values.v2.type,this.state.values.v3.type],
          [this.state.values.v4.type,this.state.values.v5.type,this.state.values.v6.type],
          [this.state.values.v7.type,this.state.values.v8.type,this.state.values.v9.type],
          [this.state.values.v1.type,this.state.values.v4.type,this.state.values.v7.type],
          [this.state.values.v2.type,this.state.values.v5.type,this.state.values.v8.type],
          [this.state.values.v3.type,this.state.values.v6.type,this.state.values.v9.type],
          [this.state.values.v1.type,this.state.values.v5.type,this.state.values.v9.type],
          [this.state.values.v3.type,this.state.values.v5.type,this.state.values.v7.type],
    
        ]
        let winner
        for(let i = 0; i<8; i++){
          let currentPos = opWins[i]
          if( (new Set(currentPos)).size !== 1 || currentPos[0] === '' || currentPos[1] === '' || currentPos[2] === '' ){
            winner = false
          }else{
            winner = currentPos
            break
          }
        }
        if(winner !== false){
          if(winner[0] === 'X'){
            winner = '1'
          }else if(winner[0] === 'O'){
            winner = '2'
          }
          this.setState({winner})
        }
    
    
      }


    render () {
    
        return (
            <>
        


<div className="col-6 p-0 m-0 mx-auto">
  {this.state.player !== '' ?
    <div>É hora do Jogador {this.state.player} jogar!</div>
  : <div>É hora do Jogador 1 Jogar!</div> }
  {this.state.winner !== '' ? <div>O jogador {this.state.winner} é o vencedor!</div>:'' }
  {this.state.velha !== '' ? <div>{this.state.velha}</div>:'' }
  <div className="row p-0 m-0 mt-5" style={{height:'9rem', borderBottom:'1px solid black'}}>
    <div onClick={() => this.handleCheck('v1')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v1.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v2')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v2.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v3')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{cursor:'pointer'}}>
      <div>{this.state.values.v3.type}</div>
    </div>
  </div>

  <div className="row p-0 m-0" style={{height:'9rem', borderBottom:'1px solid black'}}>
    <div onClick={() => this.handleCheck('v4')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v4.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v5')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v5.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v6')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{cursor:'pointer'}}>
      <div>{this.state.values.v6.type}</div>
    </div>
  </div>

  <div className="row p-0 m-0" style={{height:'9rem'}}>
    <div onClick={() => this.handleCheck('v7')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v7.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v8')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{borderRight:'1px solid black',cursor:'pointer'}}>
      <div>{this.state.values.v8.type}</div>
    </div>

    <div onClick={() => this.handleCheck('v9')} className="col-4 p-0 m-0 align-items-center justify-content-center d-flex" style={{cursor:'pointer'}}>
      <div>{this.state.values.v9.type}</div>
    </div>
  </div>

</div>

<button onClick={() => this.restartGame()} class="btn btn-outline-success">Restart!
</button>
</>
)
}
}

export default BodyComponent