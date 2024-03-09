import Image from "next/image"
import profile from "../../public/vercel.svg"


export default function Home() {
  console.log(profile)
  return (
    <main >
      <Image src="https://imgs.search.brave.com/R9sf8the75vTbB3abeP1CSrqkcl79GmprS9UBMX0wD4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNzc5/MzE2NDUvcGhvdG8v/d29tYW4tYW5kLXlv/dW5nLWdpcmwtb3V0/ZG9vcnMtd2l0aC1w/ZW9wbGUtaW4tYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bG5V/UWZnTHlVZ21HUHR6/NkZzYXRIWVNub3dZ/Xzl3YmRQUXVYZmI4/WDNxQT0" width={500} height={500}/>
      <Image src={profile.src} width={profile.width} height={profile.height} />
      <img src={profile.src}/>
    </main>
  );
}

