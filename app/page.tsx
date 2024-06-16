'use client'
import { Text } from "@mantine/core";
import { FeaturesCards } from "./components/Features/Features";
import { HeaderMegaMenu } from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel"

export default function HomePage() {
  return (
    <main style={{backgroundColor: "#222526", width: "100vw", minHeight: "100vh", paddingTop: "30px", paddingLeft: "15px", paddingRight: "15px"}}>
      <HeaderMegaMenu />
      <FeaturesCards />
      <Text style={{fontFamily: "sans-serif", fontWeight: "600", fontSize: "30px", color: "#D7D5CF"}} mt={45} ta="center">
          Trusted by Companies At
        </Text>
        <Carousel />
        
    </main>
  )
}
