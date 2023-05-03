import CardComponent from "@/component/CardComponent"
import Navbarkot from "@/component/Navbarkot"
import { API_KEY } from "@/lib";
export default function Home({movies}) {
  const data = movies?.results || [];
  console.log(data);
  return (
    <>
      <div className="container">
      <div className="d-flex justify-content-evenly flex-wrap">
        {data.length > 0 && 
        data.map((movie)=>(
          <CardComponent key={movie.id} imagePath={movie.
          backdrop_path} title={movie.title} id={movie.id}/>
          ))}
      </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res = await fetch(url);
  if(!res){
    console.log("Error fetching data")
  }
  const movies = await res.json();
  if(!movies){
    console.log("Error")
    return{
      props:{
        movies:[],
      }
    }
  }
  return {
    props:{
      movies,
    }
  }
}
