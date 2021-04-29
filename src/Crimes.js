import react,{Component, component} from 'react'
import axios from 'axios';
class Crimes extends Component
{
    state={
        crimelist:[]

    }
    getCrime=(e)=>
    {
        e.preventDefault();
        const stad=e.target.elements.stad.value
        axios.get(`https://brottsplatskartan.se/api/events/?location=${stad}`).then(res=>{
        this.setState({
            crimelist:res.data.data
        
        })
    })
}
    render()
        {
            return(
                <div>
                    <h1>Sök önskad stad för brotthändelser</h1>
                <form onSubmit={this.getCrime}>
                    <input type="text" name="stad" placeholder="stad"></input>
                    <button type="submit">Hämta brotthändelser</button>
                </form>
                {this.state.crimelist.map(crime=>{
                    return(
                        <div>
                            <table>
                                <tr>
                                 <th>Datum</th>
                                 <th>Brottstyp</th>
                                 <th>Plats</th>
                                 <th>Brottsbeskrivning</th>
                                 <th>Mer detaljerad beskrivning</th>
                                 <th>Exkat plats</th>
                                 <th>När?</th>
                                </tr>
                                <tr>
                                    <td>{crime.pubdate_iso8601}</td>
                                    <td>{crime.title_type}</td>
                                    <td>{crime.title_location}</td>
                                    <td>{crime.description}</td>
                                    <td>{crime.content}</td>
                                    <td>{crime.location_string}</td>
                                    <td>{crime.date_human}</td>
                                </tr>


                            </table>
                        </div>
                    )
                })}
                </div>
            )
        }      
}
export default Crimes;