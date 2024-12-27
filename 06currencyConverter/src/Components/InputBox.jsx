import React, { useId } from "react";

function InputBox({label, Amount, currentCurrency, onAmountChange, onCurrencyChange, currencyOptions=[], amountDisable=false, currencyDisable=false , classname=""}){

    const amountInputId= useId()

    return (
        <>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
                <div className="w-1/2">

                    <label className="text-black/40 mb-2 inline-block" htmlFor= {amountInputId} > {label} </label>

                    <input type="number" className="outline-none w-full bg-transparent py-1.5" 
                    placeholder="Amount" value={Amount} onChange={ (e)=>onAmountChange && onAmountChange(e.target.value)} 
                    disabled={amountDisable} id={amountInputId} />

                </div>
                <div className="w-1/2flex flex-wrap justify-end text-right">

                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={currentCurrency}  onChange={ (e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} >
                        { //looping 
                            currencyOptions.map( (currency)=> (
                                <option value={currency} key={currency}>{currency}</option> //returning option element to create list
                            ))
                        } 

                    </select>

                </div>
            </div>
        </>
    )
}
export default InputBox;