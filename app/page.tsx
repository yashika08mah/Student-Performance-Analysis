
import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero text-center">
        <div className=" w-max">
          <h1 className="text-5xl font-bold">Student Performance Tracking</h1>
          <p className="py-6 text-xl">Student Performance Tracking is a web application built using NextJS and MySQL which helps student and teachers to track academic progress.</p>
          <Link href='/users/login' className="btn btn-primary px-10">Login</Link>
        </div>
      </div>
    </div>
  )
}
