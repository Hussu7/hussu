import React from 'react'
import Layout from '../componenets/layout/Layout'

const About = () => {
  return (
    <>
      <Layout>
        <section className='flex flex-col w-full justify-center items-center gap-2 p-4'>
          <div className='text-center h-36 w-36 rounded-full bg-cover bg-[url(https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/353603821_3631886730467791_459000761625211248_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=GOf69vqDk4gQ7kNvgHzhnGk&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=A1w4nA9p7km-13W3Ol04sOI&oh=00_AYDClrcZ437P4hjMGAYqtcRrUm0-cuJRoKgxscx2dbErlQ&oe=671BBCE4)]'></div>
          <div className='w-96 text-center text-wrap'>
            <h1 className='text-3xl font-bold'>Hello</h1>
            <p>
              I'm Husen basnet aka Mr.Hussu7. a creative Software Engineer with strong design instincts and a love for coding!
              I love designing and building things that are both beautiful and functional. Some of my current favorite tools are Next.js, React, Node, Three.js, Socket.io and MongoDB.
              I'm currently working at Powur as a front-end engineer, but I'm also always building side projects. So, follow me on my socials to see what I'm up to.
            </p>
          </div>
        </section>

      </Layout>
    </>
  )
}

export default About