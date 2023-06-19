"use client";
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
      <NavBlock>
        <li>
          <Link href={'/'} className='nav__link'>홈</Link>
        </li>        
        <li>
          <Link href={'/write'} className='nav__link'>글쓰기</Link>
        </li>
      </NavBlock>
  )
}

const NavBlock = styled.ul`
    width: 200px;
    position: fixed;
    left: calc(50% + 320px);
    top: 20px;

    .nav__link{
        display:inline-block;
        font-size:1.4rem;
        font-weight:bold;
        margin-bottom:0.6em;
    }
`