
import { HeroCard } from '../components';

import { useLocation, useNavigate } from 'react-router';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()  
  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)
  const {searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) {
      navigate(`/search`)
      return
    }
    navigate(`?q=${searchText.trim()}`)
    
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
          <div className="col-5">
            <h4> Searching</h4>
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Find your hero"
                className="form-control"
                autoComplete="off"
                name="searchText"
                value={ searchText }
                onChange={ onInputChange }
              />
            
              <button
                type="submit"
                className="btn mt-2 btn-outline-primary btn-block"
              >
                Search
              </button>
            </form> 
          </div>

          
          <div className="col-7">
            <h4> Results</h4>
            <hr />
            <div className="animate__animated animate__fadeIn">
              { q === ''
                ? <div className="alert alert-info">Search a hero</div>
                : heroes.length <= 0 && <div className="alert alert-danger">No Hero found <b>{ q }</b></div>
              }    

              
              {
                heroes.map(hero => (
                  <HeroCard key={ hero.id } { ...hero }>
                    <h3>{ hero.superhero }</h3>
                  </HeroCard>
                ))
              }
            </div >
          </div>


      </div>
    </>
  )
}
