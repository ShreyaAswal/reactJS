import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  
  const [Amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount]= useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options= Object.keys(currencyInfo)

  const swap = ()=>{
    setTo(from) //read Readme md for direct swapping (as react's updates takes place in batches and does not take place immidiately, they are batched and applied after current execution gets complete)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(Amount)
  }

  const convert = ()=> {
    setConvertedAmount(Amount * currencyInfo[to])

  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{ backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

            <h2 className='flex justify-center font-sans font-bold text-3xl mb-4 text-white '>Currency Converter</h2>

            <form onSubmit={ (e)=>{
              e.preventDefault() 
              convert()
              }}>

                <div className="w-full mb-1">

                  <InputBox label="From" Amount={Amount} currentCurrency={from} onAmountChange= { (amount)=>{setAmount(amount)}}
                  onCurrencyChange={ (currency)=>{ setFrom(currency) }} currencyOptions={options} />

                  <div className="relative w-full h-0.5">

                    <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  border-2 
                    border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                        swap
                    </button>
                  </div>

                  <InputBox label="To" Amount={convertedAmount} currentCurrency={to} onCurrencyChange={ (currency)=>{ setTo(currency) }} 
                  currencyOptions={options} amountDisable />

                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                
                </div>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
