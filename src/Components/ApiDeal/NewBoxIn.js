import React,{useState , useEffect} from 'react'
import axios from 'axios'
const NewBoxIn = () => {
    const [num, setNum] = useState('None');
    const [Name, setName] = useState('')
    const [Moves, setMoves] = useState('')
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
  return (
    <>
        <div className="box-inside">
            <select value={num} onChange={(event) =>{setNum(event.target.value)}} className='Select_Options'>
                <option value="None">Select Value</option>
                <option value="1">1</option>
                <option value="25">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            {num === 'None'? null : <div className="shown__result">You Got {Name} with {Moves} moves</div> }
        </div>
    </>
  )
}

export default NewBoxIn