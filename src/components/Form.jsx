export default function Form({
  setRegion,
  country,
  setCountry,
  searchWord,
  setSearchWord,
}) {
  function handleSelect(string) {
    setRegion(string);
    // console.log("region", string);
  }
  function handleInput(string) {
    //
    const regExpNum = /[0-9]/;

    if (regExpNum.test(string)) {
      alert("No numbers in input please");
    } else if (!regExpNum.test(string)) {
      setSearchWord(string);
    }
  }

  // console.log(Object.keys(country));
  // console.log(Object.keys(country) === 0);
  return (
    <form
      className="form"
      autoComplete="off"
      style={{}}
      onSubmit={(e) => e.preventDefault()}
    >
      <a
        href="#"
        className={`btn--back ${
          Object.keys(country).length === 0 ? "active" : ""
        }`}
        onClick={() => setCountry({})}
      >
        back
      </a>
      <div
        className={`input-container ${
          Object.keys(country).length === 0 ? "" : "active"
        }`}
      >
        <button className="btn--input">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          type="text"
          className="input"
          value={searchWord}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div
        className={`input-container ${
          Object.keys(country).length === 0 ? "" : "active"
        }`}
      >
        <label htmlFor="countries" style={{ display: "none" }}>
          Filter by region
        </label>
        <select
          id="countries"
          name="countries"
          onChange={(e) => handleSelect(e.target.value.toLowerCase())}
        >
          <option value="All">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
}
