import React from 'react'

export const Card = ({phraseRandom, colorRandom, clickButtom}) => {

  const styleButtom = {
    backgroundColor: colorRandom
  }

  return (
    <article className='QuoteBox' style={{color: colorRandom}}>
      <h2 className='box_tittle'> &#8220;{phraseRandom.quote}&#8221;</h2>
      <ul className='box_list'>
        <li>
          <b className='box_b'>Author:</b> 
          {phraseRandom.author}
        </li>
      </ul>
      <button 
        style={styleButtom} 
        className='box_btn'
        onClick={clickButtom}
      >&#62;
      </button>
    </article>
  )
}

export default Card