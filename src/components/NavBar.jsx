import React from 'react'
import { navLists } from '../constants'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />

        <ul>
          {navLists.map((nav) => (
            <li key={nav}>
               {/* FIX 2: Fixed href syntax to be a proper string/variable */}
              <a href={`/${nav}`}>
                {nav}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3 font-semibold">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar