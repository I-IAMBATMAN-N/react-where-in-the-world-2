export default function Countries({ data, region, setCountry, searchWord }) {
  const countryArrays = {
    all: data,
    asia: data.slice().filter((country) => country.region === "Asia"),
    america: data.slice().filter((country) => country.region === "Americas"),
    africa: data.slice().filter((country) => country.region === "Africa"),
    europe: data.slice().filter((country) => country.region === "Europe"),
    oceania: data.slice().filter((country) => country.region === "Oceania"),
  };

  const keys = Object.keys(countryArrays);
  // console.log("keys", keys);

  // console.log("asian", asianCountries);
  // console.log("america", americanCountries);
  // console.log("africa", africanCountries);
  // console.log("europe", europeanCountries);
  // console.log("oceania", oceanianCountries);
  //
  return (
    <section className="section ">
      <CountriesItems />
    </section>
  );

  function CountriesItems({ country }) {
    function handleCountry(selectedCountry) {
      setCountry(selectedCountry);
      // console.log(selectedCountry);
    }
    //  console.log("countries searchWord", searchWord);
    return (
      <>
        {countryArrays[region]
          .filter(
            (item) =>
              item.name.official
                .toLowerCase()
                .search(searchWord.toLowerCase()) >= 0
          )
          .map((country) => (
            <article
              key={Math.random()}
              className="country"
              onClick={() => handleCountry(country)}
            >
              <img
                src={country.flags.png}
                alt="${country.flags.alt}"
                className="img"
              />
              <section>
                <h3 className="country-name">{country.name.official}</h3>
                <h5 className="data">
                  Population:{" "}
                  <span>{(+country.population / 1000000).toFixed(1)} mil.</span>
                </h5>
                <h5 className="data">
                  Region: <span>{country.region}</span>
                </h5>
                <h5 className="data">
                  Capital: <span>{country.capital || "no capital"}</span>
                </h5>
              </section>
            </article>
          ))}
        {/* {region === "all" ? (
          data
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )}
        {region === "asia" ? (
          asianCountries
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )}
        {region === "america" ? (
          americanCountries
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )}
        {region === "africa" ? (
          africanCountries
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )}
        {region === "europe" ? (
          europeanCountries
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )}
        {region === "oceania" ? (
          oceanianCountries
            .filter(
              (item) =>
                item.name.official
                  .toLowerCase()
                  .search(searchWord.toLowerCase()) >= 0
            )
            .map((country) => (
              <article
                key={Math.random()}
                className="country"
                onClick={() => handleCountry(country)}
              >
                <img
                  src={country.flags.png}
                  alt="${country.flags.alt}"
                  className="img"
                />
                <section>
                  <h3 className="country-name">{country.name.official}</h3>
                  <h5 className="data">
                    Population:{" "}
                    <span>
                      {(+country.population / 1000000).toFixed(1)} mil.
                    </span>
                  </h5>
                  <h5 className="data">
                    Region: <span>{country.region}</span>
                  </h5>
                  <h5 className="data">
                    Capital: <span>{country.capital || "no capital"}</span>
                  </h5>
                </section>
              </article>
            ))
        ) : (
          <></>
        )} */}
      </>
    );
  }
}
