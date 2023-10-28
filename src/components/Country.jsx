export default function Country({ country }) {
  // console.log("country", country);
  // console.log("country currencies", Object.keys(country.currencies));
  // console.log(country.currencies[Object.keys(country.currencies)[0]]);

  const currencies = country.currencies ? Object.keys(country.currencies) : [];
  const languages = country.languages ? Object.values(country.languages) : [];
  const neighbours = country.borders;

  // console.log(country.languages);
  // console.log(country.borders);

  // console.log("custom currencies", currencies);

  return (
    <section className="country-section">
      <article className="country-full">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || country.name.official + "flag"}
          width="500px"
        />
        <section>
          <h3 className="name">{country.name.official || "none"}</h3>
          <h5 className="data">
            Native Name:{" "}
            <span>{country.name.nativeName?.common || "none"}</span>
          </h5>
          <h5 className="data">
            Population:{" "}
            <span>{+(country.population / 1000000).toFixed(1)} mil.</span>
          </h5>
          <h5 className="data">
            Region: <span>{country.region}</span>
          </h5>
          <h5 className="data">
            Sub Region: <span>{country.subRegion || "none"}</span>
          </h5>
          <h5 className="data">
            Capital: <span>{country.capital || "none"}</span>
          </h5>
          <br />
          <h5 className="data">
            Top Level Domain: <span>{country.tld}</span>
          </h5>
          <br />
          <h5 className="data">Currencies: </h5>
          <ul className="list">
            {/*  */}
            <ListItems items={currencies} />
            {/*  */}
          </ul>
          <br />
          <h5 className="data">Languages: </h5>
          <ul className="list">
            {/*  */}
            <ListItems items={languages} />
            {/*  */}
          </ul>
          <br />
          <h5 className="data">Neighbours: </h5>
          <ul className="list">
            {/*  */}
            <ListItems items={neighbours} />
            {/*  */}
          </ul>
        </section>
      </article>
    </section>
  );
  function ListItems({ items }) {
    return (
      <>
        {items ? (
          items.map((neighbour, index) => (
            <li className="list-item" key={index}>
              {neighbour}
            </li>
          ))
        ) : (
          <></>
        )}
      </>
    );
  }
}
