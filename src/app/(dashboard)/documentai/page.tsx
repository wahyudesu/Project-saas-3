"use client"

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'

function account() {
  return (
    <div className='pr-80 pl-80'>
      <div className='mt-4'>
        <Breadcrumbs className="text-2xl" size='lg'>
          <BreadcrumbItem href="/dashboard/assignment" className="hover:underline">Assignment</BreadcrumbItem>
          <BreadcrumbItem href="/dashboard/kelas" className="hover:underline">Kelas</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div>
        <h1>Blog List</h1>;
      </div>
    </div>
  )
}

export default account