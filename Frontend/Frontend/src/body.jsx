import Axios from 'axios'
import { set } from 'mongoose';
import { useEffect, useState } from 'react'
function Div()
{
 const [val,setval]=useState("");
 const [data,setdata]=useState([]);
 const [sid,setsid]=useState("");

function submithandler(e)
{
    e.preventDefault(); 
    Axios.post("http://localhost:3000/home/submit",{url:val})
    .then(response=>setsid(response.data))
    .catch(err=>console.log(err));
}
useEffect(() => {
    const fetchData = async () => {
        try {
            const data1 = await Axios.get("http://localhost:3000/home/homes");
            setdata(data1.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);
return(
    <>
    <div className="body-div">
        <div className="body-innerdiv">
            <h1>Paste a long url</h1>
            <h1>optional custom alias</h1>
            <span>shorten</span>
            
        </div>
        <div>
        <form onSubmit={submithandler}  >
                <input  value={val} onChange={(e)=>{setval(e.target.value)}}  type="text"  placeholder="Enter URL"/>
                <button type="submit">Shorten</button>
                <p>
    <span style={{ marginRight: "19px", fontWeight: "bolder" }}>
        Shortened Url
    </span>
    {sid}
</p>
            </form>
        </div>
        </div>
       
        {data && data.length > 0 ? (
           <> <h4 style={{textAlign:"center",margin:"40px"}}>Your Shortened urls ..</h4>
    <div className="tablediv">
        
        <table>
            <thead>
                <tr>
                    <th>Shortened URL</th>
                    <th>Redirect URL</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.shortid}</td>
                        <td>{item.redirecturl}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
):(
    <h3 style={{textAlign:"center",margin:"40px"}}>Nothing to show ... lets get Started !!!</h3>
)}
</>

   
)
}
export default Div;