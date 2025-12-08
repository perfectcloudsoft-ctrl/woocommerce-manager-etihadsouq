'use client';

import { InputGroupType } from '@/types/input-group-type'
import { RiAtLine, RiKeyLine } from '@remixicon/react'
import { ChangeEvent, useState } from 'react'
import BasicForm from '../ui/basic-form'
import { handleFormInputDirectOnChange } from '@/functions/form-handlers'
import { UserLoginFormFieldTypes } from '@/types/user-login-types'

const EmailLoginForm = () => {

  const [formData, setFormData] = useState<UserLoginFormFieldTypes>({
    email: '',
    password: '',
  });

  const [fieldsData, setFieldsData] = useState<InputGroupType[]>([
    {
      value: '',
      onChange: handleInputChange,
      icon: RiAtLine,
      placeholder: "Email address",
      name: "email",
      invalid: false,
      type: "text"
    },
    {
      value: '',
      onChange: handleInputChange,
      icon: RiKeyLine,
      placeholder: "Password",
      name: "password",
      invalid: false,
      isPassword: true,
      type: "password",
    }
  ])

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    handleFormInputDirectOnChange(event, setFormData)
  }

  return (
    <div
      className='space-y-7'
    >
      <div>
        <h2
          className='text-lg font-semibold'
        >Login to your account</h2>
        <p
          className='text-foreground-secondary text-sm'
        >Manage and track customer orders and more</p>
      </div>
      <BasicForm
        fieldsData={fieldsData}
        submitButtoneText={{
          inprogress: "Please wait",
          normal: "SignIn",
        }}
        onSubmit={async () => {
          await new Promise(resolve => setTimeout(resolve, 5000));
        }}
      />
    </div>
  )
}

export default EmailLoginForm