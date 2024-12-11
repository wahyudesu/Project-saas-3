"use client"

// import Card_stats from '@/components/card'
import React from 'react'
import {Divider} from "@nextui-org/react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { Button } from '@/components/ui/button';
import HoverDevCards from '@/components/dock';
import { CreateAssignment } from '@/components/drawermodal';
import TableAssignment from '@/components/tableassignment';
import TableAssignmentApi from '@/components/tableassignmentapi';
import AssignmentFolders from '@/components/card-assignments';
import FolderList from '@/components/card1';
import FolderCountCard from '@/components/card1';
import KelasCountCard from '@/components/card2';

function Dashboard() {
  return (
    <div className='mx-80'>
      <div className='mt-4 mb-4'>
        <Breadcrumbs size='lg' className="text-2xl" >
          <BreadcrumbItem href="/dashboard" className="hover:underline">Dashboard</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className='flex justify-center gap-5'>
        <FolderCountCard/>
        <KelasCountCard/>
        <KelasCountCard/>
        {/* <Card_stats/> */}
      </div>
      <Divider className="my-4" />
      <div className='flex justify-start gap-2'>
        <CreateAssignment/>
        <Button variant="outline">
          Sort by: date
        </Button>
        <Button variant="outline">
          Sort by: name
        </Button>
        {/* <DrawerDialogDemo/> */}
      </div>
      <div className='mt-4'>
        <AssignmentFolders/>
        <TableAssignment/>
        {/* <TableAssignmentApi/> */}
      </div>
      <div>

      </div>
      <div className='mb-4'>
        <HoverDevCards/>
      </div>
    </div>
  )
}

export default Dashboard