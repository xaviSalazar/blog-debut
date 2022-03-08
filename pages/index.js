import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { prefix } from '../prefix.js'

const image_path = '/images/coderGuy.gif'

const myLoader = () => {
  return `${prefix}${image_path}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

export default function Home() {

  return (
    <div>

    <div>
      <h1>Hi over there! I am Victor</h1>

      <Image 
          loader = {myLoader}
          src = {image_path}
          alt = 'presentation image'
          width="800"
          height="800"
      />
    </div>
    <div>

  <h1>About me</h1>
  <h2>- 🔭 &nbsp; I’m currently working as a C++ developer. </h2>
  <h2>- 🤔 &nbsp; Exploring new technologies and coding new bugs all the time. </h2>
  <h2>- 🎓 &nbsp; I have an Electrical Engineering Bachelor with an Embedded Systems master.</h2>
  <h2>- 💼 &nbsp; Enthusiast in Web development and Artificial Intelligence.</h2>
  <h2>- ✍️ &nbsp; I enjoy taking my backpack with me and visiting new places.  </h2>
  {/* <h2>- ☕ &nbsp; I am a beer enthusiast when it comes to create innovative solutions.</h2> */}

  </div>
</div>
  )

}
