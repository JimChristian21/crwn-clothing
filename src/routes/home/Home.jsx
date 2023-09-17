import Directory from "../../components/category-item/directory/Directory";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://w0.peakpx.com/wallpaper/242/53/HD-wallpaper-attitude-black-broken-dark-devil-hat-men-in-hat-smoke-villains.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://www.svadore.com/wp-content/uploads/2019/04/Shopping-in-Shanghai-The-3-Best-Stalls-at-The-Fabric-Market-asia-china-shanghai-fashion-leather-jackets-gloves-eyewear-sunglasses-eyeglasses-fake-counterfeit-best-shopping-1-6-scaled.jpg"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://e0.pxfuel.com/wallpapers/418/797/desktop-wallpaper-sneakerhead.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://wallpaperaccess.com/full/7151641.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://wallpapers.com/images/high/vogue-street-style-mens-fashion-dsfji3119irooc02.webp"
    }
  ]

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
