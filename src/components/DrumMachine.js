import React, { Component } from 'react'
import Drumpad from './Drumpad'
import '../App.css'


//Configuramos el componente derivado de App, padre de Drumpad, con el state que contiene las canciones, letras y url de las canciones.
//
class DrumMachine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drumpads:[
            {song: "clip",
             url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
             key: "Q",
            },
            {song: "Heater-2",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
                key: "W"
               },
               {song: "Heater-3",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
                key: "E"
               },
               {song: "Heater-4",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
                key: "A"
               },
               {song: "Clip",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                key: "S"
               },
               {song: "Open HH",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
                key: "D"
               },
               {song: "Kick-n'-Hat",
                url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                key: "Z"
               },
               {song: "Kick",
                url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                key: "X"
               },
               {song: "Closed-HH",
                url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
                key: "C"
               },
            ],

            actualSong:'',
        };

        this.handleClick=this.handleClick.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this)
    }

    //montamos el listener de tecla apretada
    componentDidMount(){

        document.addEventListener('keypress', this.handleKeyPress)
   }


    //Seteamos el método para recibir el click sobre la tecla

        handleClick(key, song) {
          return()=>{

            document.getElementById(key).play()
            this.setState({
                actualSong: song
            })
          
        }
    }

  
    render() {
        return (
           
            <div id="drum-machine">
                <h1>Drum Machine</h1>

                <div className="pad_container">

                               
               {this.state.drumpads.map(drumpad=>(

                <Drumpad 
                song={drumpad.song}
                key={drumpad.key}
                url={drumpad.url}
                drumKey= {drumpad.key}
                handleClick={this.handleClick}

                />
               ))}         
                    </div>     
               
               
                <div id="display">
                    <p>{this.state.actualSong}</p>
                </div>

                </div>
            
            
        )
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.handleKeyPress)
    }

    handleKeyPress(e) {
        const pad = e.key.toUpperCase();
        const padPress= this.state.drumpads.find(
            item => item.key === pad,
        );
        // click the button
        if (padPress) { document.getElementById(padPress.song).click()};
    }
}

export default DrumMachine