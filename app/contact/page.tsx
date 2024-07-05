"use client"

import Navbar from "@/components/landing/navbar"

import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Twitter } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Button from "@/components/button"

const ContactPage = () => {
  return (
    
    <div className="flex flex-col bg-bkg text-white overflow-hidden">
        <section className="2xl:mx-[300px]">
            <Navbar />
        </section>
        <section className="grid grid-cols-2 flex-row  md:flex-col my-[100px]">
          <div className="flex flex-col mx-auto mt-[16px] gap-y-[20px] grid-span-1">
            <div className="flex text-[36px] font-bold clash-display text-cpink">
              Get in touch
            </div>
            <div className="flex flex-col ">
              <p className=" ">Contact</p>
              <p className=" ">Information</p>
            </div>
            <div className="flex flex-col ">
              <p className=" ">27,Alara Street</p>
              <p className=" ">Yaba 100012</p>
              <p className=" ">Lagos State</p>
            </div>
            <div className="flex flex-col ">
              <p className=" ">Call us : 07067981819</p>
            </div>
            <div className="flex flex-col ">
              <p className=" ">We are open from Monday - Friday</p>
              <p className=" ">08:00am - 05:00pm</p>
            </div>
            <div className="flex gap-y-[10px] gap-x-[10px] flex-col">
              <div className=" text-cpink text-[10px] md:text-[12px] lg:text-[14px]">
                Share on
              </div>
              <div className="flex gap-x-[10px]">
                <div className="relative hover:text-cpink transition cursor-pointer">
                  <Instagram className="h-17 w-17" />
                </div>
                <div className="relative hover:text-cpink transition cursor-pointer">
                  <Twitter className="h-17 w-17" />
                </div>
                <div className="relative hover:text-cpink transition cursor-pointer">
                  <Facebook className="h-17 w-17" />
                </div>
                <div className="relative hover:text-cpink transition cursor-pointer">
                  <Linkedin className="h-17 w-17" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-span-1">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button content="Deploy"/>
              </CardFooter>
            </Card>
          </div>
        </section>
    </div>
  )
}

export default ContactPage