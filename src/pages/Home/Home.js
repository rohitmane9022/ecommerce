import "../Home/Home.css";
import {
  CategoryCard,
  Footer,
} from "../../Components/index";
import nike from "../../image/nikeAirforce.jpg"
export function Home() {
 

  return (
    <div className="home__container">
      <section className="hero__section">
        <div className="content__container">
          <img src={nike} alt="somthing went wrong" width="100%" style={{display:"block", margin:"0 auto"}}/>
        </div>
      </section>

      <section className="categories_section">
        <div className="content_container">
          <div className="categories__heading__container">
           
            <h1 style={{textAlign:"center",margin:"20px auto"}}>Categories</h1>
          </div>
          <CategoryCard />
        </div>
      </section>
      <Footer />
    </div>
  );
}
