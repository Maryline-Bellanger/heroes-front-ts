import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeroData } from "../interfaces/Heroes";
import HeroDetail from "../components/HeroDetail";


type HeroParams = {
  id: string;
};

const Hero = () => {

  const { id } = useParams<HeroParams>();
  const [oneHero, setOneHero] = useState<HeroData | null>(null);

  useEffect(() => {
    const getHero = async() => {
      const response = await fetch(`http://localhost:8000/heroes/${id}`)
      const data = await response.json()
      setOneHero(data)
    }
    getHero()
  }, [id])

  return (
    <div style={{paddingTop: '20px'}}>
      <HeroDetail oneHero={oneHero} />
    </div>
  )
}

export default Hero