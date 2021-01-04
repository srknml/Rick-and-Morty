import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import Card from "../../../components/rick-and-morty/card"


const Page = ({ chars }) => {

  return (
    <div>
      <h1>Rick And Morty</h1>
        
        <div>as</div>
        <div> </div>
        <div>as</div>
      <div >
       {/*  {chars &&
          chars.results.map((char) => (
            <div key={char.id} >
              <figure >
                <img  src={char.image}></img>
              </figure>

            </div>
          ))} */}
          <Card />
      </div>
      
    </div>
  );
};

Page.getInitialProps = async ({ query }) => {
  const res = await unfetch(`https://rickandmortyapi.com/api/character/?page=${query.page}`);
  const chars = await res.json();
  
  return {chars};
};

export default Page;