import styled from 'styled-components'

const Btn = styled.button`

color: yellow;

`;
const SeriesCard = ({ curElem }) => {
  
  const {img_url, name, rating, description, id, cast, genre, watch_url} = curElem;
  return (
    <div className="shadow-white shadow-lg hover:shadow-xl hover:shadow-white h-full w-96">
      <div>
        <img className="w-full" src={img_url} alt={name} />
      </div>
      <div className="p-5" key={id}>
        <h2 className="my-2 font-bold text-xl">Name: {name}</h2>
        <h3 className='my-2 font-bold text-base'>Rating: <span className={`${rating >=8.5 ? "bg-green-500 px-2 rounded-3xl" : "bg-yellow-500 px-2 rounded-3xl"}`}>{rating}</span></h3>
        <p className="my-2">Summary: {description}</p>
        <p className="my-2">Genre: {genre}</p>
        <p className="my-2">Cast: {cast}</p>
        <a href={watch_url}>
          <Btn className='bg-indigo-500 hover:bg-indigo-600 hover:scale-105 ease-in-out transition duration-300 my-1 text-white'>
            Watch now
          </Btn>
        </a>
      </div>
    </div>
  );
};

export default SeriesCard;
