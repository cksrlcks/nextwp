"use client";
import React from 'react'
import SWRConfigContext from './SWRConfigContext';
import StyledContext from '@/context/StyledContext';

export default function ContextWrapper({children}: { children: React.ReactNode }) {
  return (
    <SWRConfigContext>
        <StyledContext>
        {children}
        </StyledContext>
    </SWRConfigContext>
)
}
