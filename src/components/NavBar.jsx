import React from 'react'
import { navLists } from '../constants'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />

        <ul>
          {navLists.map((item) => (
            // FIX: Use item.label for the Key (must be unique string)
            <li key={item.label}>
              
              {/* FIX: Use item.label for the link text (must be string) */}
              <a href={`/${item.label}`} className="text-white opacity-80 hover:opacity-100 transition-all">
                {item.label}
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