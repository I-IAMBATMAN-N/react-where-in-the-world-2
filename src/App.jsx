import { useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Countries from "./components/Countries";
import Country from "./components/Country";

import "./style.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [region, setRegion] = useState("all");
  const [data, setData] = useState([]);
  const [country, setCountry] = useState({});
  const [searchWord, setSearchWord] = useState("");
  //
  const fetchURLs = {
    all: "https://restcountries.com/v3.1/all",
    byName: "https://restcountries.com/v3.1/name/",
    byCode: "https://restcountries.com/v3.1/alpha/",
    byRegion: "https://restcountries.com/v3.1/region/",
  };
  useEffect(() => {
    document.body.classList.toggle("mode");
  }, [darkMode]);
  useEffect(() => {
    async function getAll() {
      try {
        const res = await fetch(fetchURLs.all);
        const data = res.json();
        //
        return data;
      } catch (err) {
        console.error(err);
      }
    }
    getAll().then((data) => {
      // console.log("data", data);
      setData(data);
    });
  }, []);
  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setCountry={setCountry}
      />
      <div className="container content">
        {/*  */}
        <Form
          setRegion={setRegion}
          country={country}
          setCountry={setCountry}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <>
          {Object.keys(country).length === 0 ? (
            <Countries
              data={data}
              region={region}
              setCountry={setCountry}
              searchWord={searchWord}
            />
          ) : (
            <>
              <Country country={country} />
            </>
          )}
        </>
        {/*  */}
      </div>
    </>
  );
}

export default App;
