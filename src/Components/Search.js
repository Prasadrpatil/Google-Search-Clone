import React, { useState, useEffect } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Search({ hideButtons = false, searchInput }) {
  const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (searchInput) {
      setInput(searchInput)
    }
  }, [searchInput])

  const search = (e) => {
    e.preventDefault()

    if (input !== '') {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      })
    }

    // history.push("/search");
    history.push({
      pathname: '/search',
      state: {
        data: input,
      },
    })
  }

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={search} variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky </Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            onClick={search}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  )
}

export default Search
