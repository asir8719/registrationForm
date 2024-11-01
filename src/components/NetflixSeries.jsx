import SeriesCard from "./SeriesList";
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {

  return (
    <div className="grid grid-cols-3 gap-10">
      {seriesData.map((currElem) => (
        <SeriesCard key={currElem.id} curElem={currElem} />
      ))}
    </div>
  );
};

export default NetflixSeries;
