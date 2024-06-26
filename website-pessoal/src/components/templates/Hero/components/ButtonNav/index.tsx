import {forwardRef, Ref} from 'react';
import { ButtonProps } from './type';
import { Slot } from '@radix-ui/react-slot';
import './styles.css'

const ButtonNav = forwardRef((props:ButtonProps, ref:Ref<HTMLButtonElement>) => {
  const {children, asChild, ...rest} = props;
  const Component = asChild? Slot : 'button';

  return(
    <Component id='component' ref={ref} {...rest}>
      {children}
    </Component>
  )
}) 

export default ButtonNav