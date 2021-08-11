import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [userAddress, setUserAddress] = useState('CONNECT');
  const [mintAmount, setMintAmount] = useState(1);
  return (
    <div className={styles.container}>
      <Head>
        <title>FroggoFrens</title>
        <meta name="description" content="FroggoFrens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
          <Image src="/assets/logo.svg" alt="logo" width={150} height={32} />
          <ul>
            <li>About</li>
            <li>Fren Scale</li>
            <li>FAQ</li>
            <li>Roadmap</li>
          </ul>
          <div className={styles.navbar_social}>
            <Image src="/assets/telegram.svg" alt="logo" width={50} height={20} />
            <Image src="/assets/discord.svg" alt="logo" width={50} height={20} />
          </div>
      </nav>

      <main className={styles.main}>
          <div className={styles.main_hero}>
            <img className={styles.main_hero_img} src='/assets/hero_img.svg'/>
            <button>{userAddress}</button>
            <p>Connecc to buy fren<br/>0.069 ETH</p>
          </div>
          <div className={styles.about}>
            <div className={styles.about_text}>
                <h1>Frens?</h1>
                <p>
                  Yes frens. You probably dont know what a fren is bc you dont have any. But deep down you know you need one innit. So to cure your depression and lead happy lief you should buy fren imo. But even if you already have frens you probably dont have as funy frens as we have here.
                </p>
            </div>
            <div className={styles.about_img}>
                <img className={styles.main_hero_img} src='/assets/section1.svg'/>
            </div>
          </div>
          <div className={styles.scale}>
            <div className={styles.scale_text}>
                <h1>Is my fren gud fren?</h1>
                <p>
                  Probably not bc what kinda fren would just take your monies liek that innit. But among the 1001 frens there is a strict ranking which determines top frenliness: 
                </p>
                <p>
                  trash (<span style={{color:'#B4F649'}}>yellow</span> background color)
                    <br/>
                  oke (<span style={{color:'#E38C09'}}>orange</span> background color)
                    <br/>
                  gud (<span style={{color:'#F3123B'}}>red</span> background color)
                    <br/>
                  based (<span style={{color:'#0FD623'}}>green</span> background color)
                    <br/>
                  chad (<span style={{color:'#0782DA'}}>blue</span> background color)
                </p>
                <p>
                  The frens come in 5 different emotions (angery, sad, uncomfy, comfy and straight vibin). They also have a lot of different hats, glasses, are holding various tings and also smoke some stuff sometiems.
                </p>
                <p style={{color:"#61D4A1"}}>
                  The rarity of each attribute and the overall rarity of your fren will be displayed once minted.
                </p>
                <p className={styles.attention}>
                  BUTT 🍑 BEWARE: there are 7 naughty frens who thought it was very funy (rightfully so imo) to just photograph their dicc 🍆 instead of the normal fren photo.
                </p>
            </div>
          </div>
          <div className={styles.section1}>
                <h1>Mint your own fren!</h1>
                <h6>0/1001 minted</h6>
                <div className={styles.section1_wrapper}>
                <p onClick={() => {
                  if(mintAmount>1){setMintAmount(mintAmount-1)}
                }}>-</p>
                <p>{mintAmount}</p>
                <p onClick={() => {
                  if(mintAmount<10){setMintAmount(mintAmount+1)}
                }}>+</p>
                </div>
                <button>MINT {mintAmount} FRENS</button>
          </div>
          <div className={styles.gallery}>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
            <div className={styles.gallery_item}></div>
          </div>
          <div className={styles.FAQ}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
            <div className={styles.FAQ_item}>
              <h3>Here we put a nice question?</h3>
              <p>Here we put an even nicer answer. Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.Here we put an even nicer answer.</p>
            </div>
          </div>
          <div className={styles.roadmap}>
            <h1>Roadmap</h1>
            <div className={styles.roadmap_box}></div>
          </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
