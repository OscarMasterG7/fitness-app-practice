import React from 'react';
import ExcersicesForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew  extends React.Component {
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e =>{ //"e" es el evento que estamos recibiendo.
        //console.log(`${e.target.name}: ${e.target.value}`) //por consola dira el nombre mas el contenido escrito. title: asd
        
        /*Manera normal, es mas larga que la manera con Babel
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
        */
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    handleSubmit = async e =>{
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()

            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    render() { 
        return (
            <div className='row'>
                <div className='col-sm'>
                    <Card {...this.state.form}/>
                </div>
                <div className='col-sm'>
                    <ExcersicesForm
                        OnChange={this.handleChange}
                        OnSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
            </div>
        );
    }
}
export default ExerciseNew;