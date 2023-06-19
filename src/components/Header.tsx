"use client";
import React from 'react'
import styled from 'styled-components';

export default function AppHeader() {
  return (
    <HeaderBlock>앱해더</HeaderBlock>
  )
}

const HeaderBlock = styled.header`
  position:sticky;
  top:0;
  background:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:1em;
  border-bottom:1px solid #eee;
  font-size:1.4rem;
  margin-bottom:1em;
`
