import React, { FC, useState } from 'react'
import FormField from './form-field'

const ProfileForm: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [firstname, setFirstName] = useState<string>('')
  const [lastname, setLastName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [haveSubmitted, setHaveSubmitted] = useState<boolean>(false)

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (!parts) return null
    else if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null
    return null
  }

  const submit = (): void => {
    try {
      const formData = {
        fields: [
          {
            objectTypeId: '0-1',
            name: 'email',
            value: email,
          },
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: firstname,
          },
          {
            objectTypeId: '0-1',
            name: 'lastname',
            value: lastname,
          },
          {
            objectTypeId: '0-1',
            name: 'message',
            value: message,
          },
        ],
        context: {
          hutk: getCookie('hubspotutk'),
          pageUri: window.location.href,
          pageName: document.getElementsByTagName('title')[0].innerHTML,
        },
      }
      fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/9081438/6d925ffc-28b9-43a2-8bf8-ce41753ddc48`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      setHaveSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submit()
      }}
      className="mx-auto max-w-xl relative"
    >
      <FormField
        label="Email"
        name="email"
        type="email"
        required={true}
        onChange={(val) => setEmail(val)}
      ></FormField>
      <div className="flex">
        <FormField
          label="First Name"
          name="firstname"
          type="text"
          onChange={(val) => setFirstName(val)}
        ></FormField>
        <div className="w-8"></div>
        <FormField
          label="Last Name"
          name="lastname"
          type="text"
          onChange={(val) => setLastName(val)}
        ></FormField>
      </div>
      <FormField
        label="Message"
        name="message"
        type="text"
        required={true}
        onChange={(val) => setMessage(val)}
      ></FormField>
      <button className="bg-lime-500 text-white py-2 px-4 rounded-sm mt-4 text-lg">Send</button>
      {haveSubmitted ? (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          Thank you for submitting the form. I will get back to you as soon as possible!
        </div>
      ) : (
        <div></div>
      )}
    </form>
  )
}

export default ProfileForm
