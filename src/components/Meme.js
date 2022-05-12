import { useState } from 'react'

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })

  function getMemeImage() {
    const dummyLength = 100
    const randomNumber = Math.floor(Math.random() * dummyLength) // modify

    // update current meme
  }

  function handleOnChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleOnChange}
        />
        <input
          type='text'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleOnChange}
        />
        <button>Get a new meme</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme--image' alt='' />
        <h2 className='meme--text top'>{/* display topText */}</h2>
        <h2 className='meme--text bottom'>{/* display bottom text */}</h2>
      </div>
    </main>
  )
}

/* 
  - fetch data from 'https://api.imgflip.com/get_memes' and save it in your code
  - complete 'getMemeImage'

  - add classnames to inputs and button
  - add click-handler to button

*/
