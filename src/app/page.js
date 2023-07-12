"use client"
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import { Advent_Pro } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css"


//import tree from "./img-tree-png.png"

const adventPro= Advent_Pro({
  subsets: ['latin'],
  weight:'100',
  style:"italic",
  
})

  export default function Home(){
  const handleButtonAction = (e) => {
    e.preventDefault();
    console.log('Background is Set.');
  }
  
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        { <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        /> }
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> 
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link> */}
        
     </Head>
     <div className="container">
  <div className="text-center">
          <h1 className={adventPro.className}>DOWNTOWN HIGH STREET</h1>
  </div>
</div>
      {/* <h1 className={adventPro.className}>DOWNTOWN HIGH STREET</h1> */}
      {/* <Page/> */}
      {/* <Link href="/productlist">Go to Product List</Link><br/> */}
      {/* <Button onClick={handleButtonAction}>SetBackground</Button><br/> */}

      <Image
        src="/img/akash.webp"
        alt="shopping image"
        width={1518}
        height={400}
        objectFit='contain'
        />
    </>
  )
}