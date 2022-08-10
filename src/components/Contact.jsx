import React, { useContext, useState } from 'react'
import ConfigContext from "../context/ConfigContext"

const Contact = () => {
  const context = useContext(ConfigContext)

  const [name, setName] = useState("dkashda")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const changeName = (e) => { setName(e.target.value); }
  const changeEmail = (e) => { setEmail(e.target.value); }
  const changeMessage = (e) => { setMessage(e.target.value); }

  const MessageContent = {
    To: context.socialMedia.email,
    From: name,
    FromEmail: email,
    Message: message
  }
  const sendEmail = (e) => {
    e.preventDefault();
    //Issue: #2
    console.log(MessageContent)
  }

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{context.settings.contact_title}</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{ context.settings.contact_description}</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={changeName} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={changeEmail} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" value={message} onChange={changeMessage} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button onClick={sendEmail} type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
