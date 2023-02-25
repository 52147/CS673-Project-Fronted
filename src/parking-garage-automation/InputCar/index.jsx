import React from 'react'
import { FooterComponent } from '../footer/index';
import NavBarComponent from "../navBar";
import { InputCar } from './InputCar';

export const InputCarComponent = () => {
  return (
    <>
      <NavBarComponent />
      <InputCar />
      <FooterComponent />
    </>
  )
}
export default InputCarComponent;