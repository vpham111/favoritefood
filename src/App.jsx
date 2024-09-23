import "./App.css";
import FoodCard from "./components/FoodCard";
import pizza from "../src/assets/pizza.jpg";
import takoyaki from "../src/assets/takoyaki.png"
import taco from "../src/assets/taco.png"
import biryani from "../src/assets/biryani.png"
import xiaolong from "../src/assets/xiaolongbao.png"
import tarte from "../src/assets/tarte.png"
import keftedes from "../src/assets/keftedes.png"
import japchae from "../src/assets/japchae.png"
import bratwurst from "../src/assets/bratwurst.png"
import karjal from "../src/assets/karjal.png"

function App() {
  return (
    <>
      <h1>Famous Foods</h1>
      <div className="food-container">
        <FoodCard
          image={pizza}
          name="Pizza"
          country="Italy"
          article="https://bakerbynature.com/the-best-pepperoni-pizza-recipe/"
        />
        <FoodCard
          image={takoyaki}
          name="Takoyaki"
          country="Japan"
          article="https://iamafoodblog.com/takoyaki-recipe/"
        />
        <FoodCard
          image={taco}
          name="Tacos Al Pastor"
          country="Mexico"
          article="https://villacocina.com/tacos-al-pastor/"
        />
        <FoodCard
          image={biryani}
          name="Biryani"
          country="India"
          article="https://en.wikipedia.org/wiki/Pizza"
        />
        <FoodCard
          image={xiaolong}
          name="Xiaolongbao"
          country="China"
          article="https://thewoksoflife.com/steamed-shanghai-soup-dumplings-xiaolongbao/"
        />
        <FoodCard
          image={tarte}
          name="Tarte Tatin"
          country="France"
          article="https://www.foodandwine.com/recipes/tarte-tatin"
        />
        <FoodCard
          image={keftedes}
          name="Keftedes"
          country="Greece"
          article="https://www.themediterraneandish.com/greek-meatballs-recipe-keftedes-lemon-sauce/"
        />
        <FoodCard
          image={japchae}
          name="Japchae"
          country="South Korea"
          article="https://www.maangchi.com/recipe/japchae"
        />
        <FoodCard
          image={bratwurst}
          name="Bratwurst"
          country="Germany"
          article="https://www.heinens.com/recipes/brat-breakdown/"
        />
        <FoodCard
          image={karjal}
          name="Karjalanpiirakka"
          country="Finland"
          article="https://bake-street.com/en/karjalanpiirakka-or-karelian-pies/"
        />
      </div>
    </>
  );
}

export default App;
