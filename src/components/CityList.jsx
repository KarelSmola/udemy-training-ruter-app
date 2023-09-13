/* eslint-disable react/prop-types */
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CityItem from "./CityItem.jsx";

import styles from "./CityList.module.css";

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={"Add your first city"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
