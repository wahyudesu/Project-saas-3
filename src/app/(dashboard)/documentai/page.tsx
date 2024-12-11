"use client"

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'

function account() {
  return (
    <div className='pr-80 pl-80'>
      <div className='mt-4'>
        <Breadcrumbs className="text-2xl" size='lg'>
          <BreadcrumbItem href="/dashboard" className="hover:underline">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/dashboard" className="hover:underline">Account</BreadcrumbItem>
        </Breadcrumbs>
        </div>
      <div>
      </div>
    </div>
  )
}

export default account