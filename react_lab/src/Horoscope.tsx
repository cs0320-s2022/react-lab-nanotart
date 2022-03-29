import React, {useState} from 'react';
import TextBox from './TextBox';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import axios from 'axios';

function Horoscope() {

    const [sun, setSun] = useState(""); // set up a change state here, original is null
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun : sun,
            moon: moon,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response : any) => {
                console.log(response.data);
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="Horoscope">
            <h1 className="Horoscope Header">
                This is the horoscope header.
            </h1>
            {/* have a change state variable in place */}
            {/* label is essentially the prop that gets passed in*/}
            <TextBox label={"Sun Sign"} change={setSun}/>
            <TextBox label={"Moon Sign"} change={{setMoon}}/>
            <TextBox label={"Rising Sign"} change={setRising}/>
            <br></br>
            <AwesomeButton type="primary" onPress={requestHoroscope}>PRESS ME!</AwesomeButton>
            {horoscope == null ? "" : horoscope.map((trait : string) => <p>{trait}</p>)}
        </div>
    );
}

export default Horoscope;