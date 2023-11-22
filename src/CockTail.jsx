import React, {useEffect, useState} from 'react';

function CockTail() {
  const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => { //useEffect to run automatic
  async function cocktail2() { //async to global function
        const res = await fetch(url); //await and fetch a url
        const data1 = await res.json(); //await and convert into json
        console.log(data1);
        setData(data1.drinks);
    }

    cocktail2()
  }, []);

  const handleClick = async ()=>{
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    const res1 = await fetch (url2)
    const data2 = await res1.json()
    setData(data2.drinks);
  }
  return (
    <>
    <center>
    <div className="bg-gray-400 border-solid w-[260px] border-black border-2 flex items-center justify-around">
    <input type="text" className='outline-none border-none bg-none' onChange={(e)=>{
        setSearch(e.target.value)
    }}/>
    <button onClick={handleClick} className='text-red-600'>Click Here</button>
    </div>
    </center>
    <div className="bg-blue-500 text-center rounded-md text-white grid grid-cols-4 justify-items-center">
    {data?.map((pack) => {
        const { strDrink, strDrinkThumb, strCategory, idDrink } = pack

        return (
         
            <>
            <div className="py-16 w-72">
            <div key={idDrink}></div>
            <div >Name: {strDrink}</div>
            <div >Category: {strCategory}</div>
            <div className="w-full border-2 border-white">
            <img src={strDrinkThumb} alt="" className='w-full'/>
            </div>
            </div>
            </>
        
        )
    })}
    
    </div>
    </>

  )
}

export default CockTail
