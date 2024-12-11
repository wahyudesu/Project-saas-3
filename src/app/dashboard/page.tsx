"use client"
import Card_stats from '@/components/card'
import React from 'react'
import {Divider} from "@nextui-org/react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';
import HoverDevCards from '@/components/dock';
import { DrawerDialogDemo } from '@/components/drawer';
import { CreateAssignment } from '@/components/drawermodal';

function Dashboard() {
  return (
    <div className='mx-80'>
      <div className='mt-4 mb-4'>
        <Breadcrumbs size='lg' className="text-2xl" >
          <BreadcrumbItem href="/dashboard" className="hover:underline">Dashboard</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className='flex justify-center'>
        <Card_stats/>
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
        
        <DrawerDialogDemo/>
        {/* <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </div>
      <div>
        <HoverDevCards/>
      </div>
    </div>
  )
}

export default Dashboard