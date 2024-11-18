import { useRef, useState } from "react";
import { AiTwotoneMinusCircle, AiTwotonePlusCircle } from "react-icons/ai";

function BookingForm() {
  const resDate = useRef(null);
  const resTime = useRef(null);
  const guestss = useRef(null);
  const occasion = useRef(null);

  const [monthState, setMonthState] = useState("");
  const [timestate, setTimeState] = useState("Select");
  const [guestsState, setGuestsState] = useState("");
  const [occasionstate, setOccasionState] = useState("Select");
  const [errors, setErrors] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const lessNum = () => {
    if (guestsState * 1 > 0) {
      setGuestsState((prev) => {
        const newValue = prev * 1 - 1;
        setErrors((prevErrors) => ({ ...prevErrors, guests: newValue <= 0 }));
        return newValue;
      });
    }
  };

  const moreNum = () => {
    if (guestsState * 1 < 50) {
      setGuestsState((prev) => {
        const newValue = prev * 1 + 1;
        setErrors((prevErrors) => ({ ...prevErrors, guests: newValue <= 0 }));
        return newValue;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      date: !monthState,
      time: !timestate || timestate === "Select",
      guests: !guestsState || guestsState <= 0,
      occasion: !occasionstate || occasionstate === "Select",
    };
    setErrors(newErrors);

    // Return true only if all fields are valid
    return !Object.values(newErrors).some((error) => error);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(monthState, "Date");
      console.log(timestate, "Time");
      console.log(guestsState, "Guests");
      console.log(occasionstate, "Occasion");

      // Reset form state
      setMonthState("");
      setTimeState("Select");
      setGuestsState("");
      setOccasionState("Select");
      setErrors({
        date: false,
        time: false,
        guests: false,
        occasion: false,
      });
    }
  };

  const inputChange = (e) => {
    const value = e.target.value;
    setMonthState(value);
    setErrors((prevErrors) => ({ ...prevErrors, date: !value }));
  };

  const timeChange = (e) => {
    const value = e.target.value;
    setTimeState(value);
    setErrors((prevErrors) => ({ ...prevErrors, time: value === "Select" }));
  };

  const guestChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setGuestsState(value);
    setErrors((prevErrors) => ({ ...prevErrors, guests: value <= 0 }));
  };

  const occasionChange = (e) => {
    const value = e.target.value;
    setOccasionState(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      occasion: value === "Select",
    }));
  };

  return (
    <form
      onSubmit={submitForm}
      style={{
        display: "grid",
        width: "75%",
        gap: "20px",
        margin: "auto",
      }}
    >
      <div className="flex justify-between items-center mb-14">
        <h2 className="font-markazi text-6xl font-bold">Reserve Your Table</h2>
      </div>
      <div className="flex justify-between">
        <label
          htmlFor="res-date"
          className="text-black font-karla text-xl font-bold"
        >
          Choose date{" "}
        </label>
        <p
          className={`text-red-500 font-karla text-lg font-bold ${
            errors.date ? "visible" : "invisible"
          }`}
        >
          Required
        </p>
      </div>
      <input
        type="date"
        id="res-date"
        ref={resDate}
        className="bg-[#eef0ef] p-2"
        value={monthState}
        onChange={inputChange}
      />
      <div className="flex justify-between">
        <label
          htmlFor="res-time"
          className="text-black font-karla text-xl font-bold"
        >
          Choose time
        </label>
        <p
          className={`text-red-500 font-karla text-lg font-bold ${
            errors.time ? "visible" : "invisible"
          }`}
        >
          Required
        </p>
      </div>
      <select
        id="res-time"
        ref={resTime}
        onChange={timeChange}
        value={timestate}
        className="bg-[#eef0ef] p-2"
      >
        <option>Select</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <div className="flex justify-between">
        <label
          htmlFor="guests"
          className="text-black font-karla text-xl font-bold"
        >
          Number of guests
        </label>
        <p
          className={`text-red-500 font-karla text-lg font-bold ${
            errors.guests ? "visible" : "invisible"
          }`}
        >
          Required
        </p>
      </div>
      <div className="flex">
        <input
          type="number"
          placeholder="0"
          value={guestsState}
          min="1"
          max="10"
          id="guests"
          ref={guestss}
          onChange={guestChange}
          className="bg-[#eef0ef] p-2 w-full text-center"
        />
        <button type="button" onClick={lessNum}>
          <AiTwotoneMinusCircle size={35} />
        </button>
        <button type="button" onClick={moreNum}>
          <AiTwotonePlusCircle size={35} />
        </button>
      </div>

      <div className="flex justify-between">
        <label
          htmlFor="occasion"
          className="text-black font-karla text-xl font-bold"
        >
          Occasion
        </label>
        <p
          className={`text-red-500 font-karla text-lg font-bold ${
            errors.occasion ? "visible" : "invisible"
          }`}
        >
          Required
        </p>
      </div>
      <select
        id="occasion"
        ref={occasion}
        className="bg-[#eef0ef] p-2"
        onChange={occasionChange}
        value={occasionstate}
      >
        <option>Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="reserve-btn mt-7 text-black font-karla text-xl font-bold"
      />
    </form>
  );
}

export default BookingForm;
