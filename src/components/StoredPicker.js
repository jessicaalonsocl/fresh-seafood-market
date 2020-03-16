import React from 'react'; 
import { getFunName } from '../helpers';

class StoredPicker extends React.Component{
   
    /**
     * Ao inves de utilizar um contructor para passar informações do componente (this) antes do componente ser chamado, 
     * nos pudemos utilizar o arrow functions
     * Dessa forma também evitamos a necessidade de chamar diferentes funções dentro do constructor
     * 
     *  
     * //constructor é chamado antes do componente
            constructor() {
                //constructor precisava vir acompanhado de um componente super()
                super();
                this.goToStore = this.goToStore.bind(this);
            }
     */

     goToStore = event => {
         // 1. Stop the form from submitting
        event.preventDefault();
        console.log("Going to store!");
        // 2. Get the text from that input
        console.log(this);
        // 3. Change the page to /store/whatever-they-entered
     }

    render(){
        //return React.createElement('p', {className: 'hey'}, 'Heyoooo');
        return  (
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2> Please enter a store</h2>
                    <input 
                        type="text" 
                        required 
                        placeholder= "Store Name" 
                        defaultValue={getFunName()} 
                    />
                    <button type="submit">Visite Store</button>
                </form>
        )
    }
}

export default StoredPicker;