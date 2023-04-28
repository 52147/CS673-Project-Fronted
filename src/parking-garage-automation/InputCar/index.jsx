
import React from 'react'
import { InputCar } from './InputCar';

export const InputCarComponent = (props) => {
  return (
    <>
      <InputCar
        showMessengerCustomerChat={props.showMessengerCustomerChat ?? true}
      />
    </>
  )
}
export default InputCarComponent;