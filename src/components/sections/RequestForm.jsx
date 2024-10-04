import React, { useState } from 'react'
import { reservationFields } from '../../data/Data';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import ButtonInput from '../ui/ButtonInput';
import ArrowDown from '../arrow/ArrowDown';
import AlertError from '../ui/AlertError';
import PopupSuccess from '../ui/PopupSuccess';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import RightArrow from "../../assets/icons - svg/Noir/24 px/Achibest-icon-Right-Arrow.svg"
const RequestForm = () => {
    const location=useLocation()
    const [selectedOption, SetSelectedOption] = useState("Select your request")
    const [searchParams, setSearchParams] = useSearchParams()
    const source =searchParams.get("source")
    useEffect(() => {
        switch(source){
        case "Reservation" : SetSelectedOption("Reservation") ; break;
        case "Transportation" : SetSelectedOption("Transportation") ; break;
        case "Wearhouse" : SetSelectedOption("Wearhouse") ; break;
        default  : SetSelectedOption("Select your request") ; break;
    }
    }, [location])
    
    const [date, setDate] = useState(new Date());
    const [dropDownOpened, SetDropDownOpened] = useState(false)
    const [success, SetSuccess] = useState(false)
    const [errorSelection, setErrorSelection] = useState(false)
    const [focusedFname, setFocusedFname] = useState(false)
    const [focusedLname, setFocusedLname] = useState(false)
    const [focusedEmail, setFocusedEmail] = useState(false)
    const [focusedPhone, setFocusedPhone] = useState(false)
    var array = [focusedFname.toString(), focusedLname.toString(), focusedEmail.toString(), focusedPhone.toString()]

    const [inputsValue, setInputsValue] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
    })
    function handleSelect(id) {
        SetSelectedOption(reservationFields[4].options[id])
    }
    
    document.onclick = (e) => {
        if (e.target.id !== "selectTop") {
            SetDropDownOpened(false)
        }
    }
    function handleOnchange(e) {
        // console.log(e.target.name)
        setInputsValue({ ...inputsValue, [e.target.name]: e.target.value })
        if(e.target.name==="Email"){
            if(e.target.value===""){
                setErrorMsg("Email is required *") 
            }
            else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
                setErrorMsg("Invalid Email *")
            }
        }
    }
    function handleSubmit(e) {
        e.preventDefault();


        if (selectedOption === "Select your request") {
            console.log(('(selectedOption === "Select your request")',selectedOption === "Select your request"))
            setErrorSelection(true);

        } else {
            setErrorSelection(false);
            const data = new FormData(e.target)
            // console.log(Object.fromEntries(data.entries()))
            SetSuccess(true)
        }
    }
    useEffect(() => {
        if (selectedOption !== "Select your request") {
            setErrorSelection(false);

        } 
        
    }, [selectedOption])
    
    const url1 = window.location.toString();
const sanitizedUrl = url1.substring(0, url1.indexOf('?'));
window.history.replaceState({}, document.title, sanitizedUrl);
    const [errorMsg, setErrorMsg] = useState("Email is required *")
    return (
        <div className="section py-[100px] ">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex  flex-col gap-[30px] ">
                <div className="sectionTop text-left  flex flex-col lg:flex-row  justify-between items-center gap-[20px] ">
                    <div className="sectionTitle flex flex-col items-start w-full lg:w-6/12 gap-1  ">ONLINE <br />REQUEST <span><img src={RightArrow}alt="" className="w-10" /></span></div>
                    <p className="text flex flex-col  lg:w-6/12 text-[18px] ">
                        Have any request? Please fill the following form! One of our
                        finest team members will immediately reach out to you!
                        Remember you’re the boss here!
                    </p>

                </div>
                <form onSubmit={handleSubmit} className="sectionBottom overflow-hidden overflow-x-auto py-6 flex flex-wrap justify-between  gap-5">
                    <div className="sectionBottomLeft w-full lg:w-[calc(100%/3*2-20px)] ">
                        <div className="reservationFields fieldList w-full flex flex-wrap justify-between gap-5">
                            {
                                reservationFields.map((item, i) => (
                                    <div key={i} className="fieldItem w-full sm:w-[calc(100%/2-20px)] flex flex-col gap-2">
                                        <label className=' text-lg font-semibold' >{item.label} {item.isRequired && "*"}</label>
                                        {
                                            item.inputType !== "select"
                                                ? <>
                                                    <input
                                                        onBlur={(e) => {
                                                            switch (i) {
                                                                case 0: setFocusedFname(true); break;
                                                                case 1: setFocusedLname(true); break;
                                                                case 2: setFocusedEmail(true); break;
                                                                case 3: setFocusedPhone(true); break;
                                                            }
                                                        }}
                                                        focused={array[i]}
                                                        name={item.inputType !== "select" && item.label}
                                                        onChange={item.inputType !== "select" && handleOnchange}
                                                        type={item.inputType}
                                                        placeholder={item.placeholder}
                                                        className='p-3 border-[1px] rounded-[5px] inputFieldItem font-normal' required={item.isRequired ? true : false} />
                                                    {
                                                        item.isRequired &&  <AlertError content={item.inputType==="email" 
                                                        ? errorMsg
                                                        : item.label + " " + "Is Required"
                                                    } />

                                                    }
                                                </>
                                                :
                                                <div className={errorSelection
                                                    ? "selectReservation invalid selectBox w-[calc(100%-30px])  relative "
                                                    : "selectReservation selectBox w-[calc(100%-30px])  relative "}>
                                                    <div
                                                        id="selectTop"
                                                        onClick={() => { SetDropDownOpened(!dropDownOpened); }}
                                                        className={dropDownOpened
                                                            ? "selectTop flex justify-between items-center p-3 border-[1px] rounded-[5px] reservationInput font-light opened"
                                                            : "selectTop flex justify-between items-center p-3 border-[1px] rounded-[5px] reservationInput font-light "
                                                        }>{selectedOption} <ArrowDown />
                                                    </div>
                                                    {errorSelection && <AlertError content={item.label + " " + "Is Required"} />}
                                                    <input name='request' type="text" onChange={(e) => e.target.value} value={selectedOption} hidden />
                                                    <div className={dropDownOpened
                                                        ? "selectBottom py-1 px-2 absolute opened"
                                                        : "selectBottom py-1 px-2 absolute "
                                                    }>
                                                        <div className="selectList">
                                                            {
                                                                item.options.map((option, j) => (
                                                                    <div
                                                                        onClick={() => { handleSelect(j); }}
                                                                        key={j}
                                                                        className="selectItem border-b-[1px] border-lightGray border-solid p-1 text-[18px] font-[600] last:border-0 hover:bg-orange cursor-pointer hover:text-white transition-all " style={{ borderColor: "lightgrey" }}>{option}</div>
                                                                 ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="sectionBottomRihgt w-full lg:w-[calc(100%/3-20px)] flex flex-col justify-between gap-5">
                        <div className="flex  flex-col gap-5">
                                <div className="reservationFields flex flex-col gap-2 ">
                                    <label className=' text-lg font-semibold'>Message</label>
                                    <textarea className='p-3 border-[1px] rounded-[5px] inputFieldItem font-light h-[156px] resize-none ' name="" id=""></textarea>
                                </div>
                            <h2 className="title text-lg font-semibold">Pick date</h2>
                            <Calendar onChange={setDate} value={date} />
                            <input name="date" type="text" onChange={(e) => e.target.value} hidden value={new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)} />
                        </div>
                    </div>
                    <ButtonInput btnContent={"Reserve Now"} rounded="rounded-lg w-full lg:w-[calc(100%/3-30px)] lg:translate-y-[-86px]" />
                </form>
                {
                    success && <PopupSuccess redirect link={"/"} popupContent={<>Your requests have been well received. <br /> We will contact you shortly for more details. We look forward to meeting you!</>} />
                }
            </div>
        </div>
    )
}

export default RequestForm