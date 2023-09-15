/* eslint-disable react/prop-types */
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

import styles from "./CountryList.module.css";

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={"Add your first city"} />;

  // const countries = cities.reduce((arr, city) => {
  //       if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  //   else return arr;
  // }, []);

  const countries = cities.reduce((acc, curr) => {
    if (!acc.map((e) => e.country).includes(curr.country))
      return [...acc, { country: curr.country, emoji: curr.emoji }];
    else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
};

export default CityList;
