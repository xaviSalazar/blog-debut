import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div>

    <div>
      <h1>Hi over there! I'm Victor</h1>

      <Image 
          src = "/images/coderGuy.gif"
          alt = 'presentation image'
          width="800"
          height="800"
      />
    </div>

    <div>

  <h1>About me</h1>
  <h2>- 🔭 &nbsp; I’m currently working as a C++ developer </h2>
  <h2>- 🤔 &nbsp; Exploring new technologies and coding new bugs all the time. </h2>
  <h2>- 🎓 &nbsp; I have an Electrical Engineering Bachelor with an Embedded Systems master.</h2>
  {/* -  &nbsp; Android developer and front-end web developer. */}
  <h2>- 💼 &nbsp; Enthusiast in Web development and Artificial Intelligence .</h2>
  <h2>- ✍️ &nbsp; I enjoy going out for a walk and visiting new places.  </h2>
  <h2>- ☕ &nbsp; I am a coffee enthusiast when it comes to create innovative solutions.</h2>

  </div>
</div>
  )

}
